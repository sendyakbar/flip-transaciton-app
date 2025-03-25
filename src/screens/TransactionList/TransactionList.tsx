import { FC, useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { Props } from './types';
import { styles } from './styles';
import { useGetTransactions } from '../../services/query/transaction/useGetTransactions';
import { TransactionCard } from '../../components/TransactionCard/TransactionCard';
import { COLOR } from '../../theme/color';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { Text } from '../../components/Text/Text';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const TransactionList: FC<Props> = () => {
  const {
    data,
    isLoading,
    refetch,
  } = useGetTransactions({});
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [processedData, setProcessedData] = useState<typeof data>(data);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const runSearch = useCallback((input: string) => {
    const lowerCaseQuery = input.toLowerCase();
    setProcessedData(() => {
      if (!searchQuery) {
        return data;
      }
      return data.filter(transaction => {
        return (
          transaction.beneficiary_name.toLowerCase().includes(lowerCaseQuery) ||
          transaction.beneficiary_bank.toLowerCase().includes(lowerCaseQuery) ||
          transaction.sender_bank.toLowerCase().includes(lowerCaseQuery) ||
          transaction.amount.toString().includes(lowerCaseQuery)
        );
      });
    });
  }, [data, searchQuery]);

  const onChangeText = useCallback((input: string) => {
    setSearchQuery(input);
    runSearch(input);
  }, [runSearch]);

  const renderEmpty = useCallback(() => (
    <View style={styles.loading}>
      <Text color={COLOR.GREY} size={16}>No data</Text>
    </View>
  ), []);

  const separator = useCallback(() => (
    <View style={styles.separator} />
  ), []);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={COLOR.SUCCESS} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <SearchBar
        onPressSort={() => {}}
        onChangeText={onChangeText}
        value={searchQuery}
      />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={processedData}
        renderItem={({ item }) => (
          <TransactionCard
            beneficiaryBank={item.beneficiary_bank}
            senderBank={item.sender_bank}
            beneficiaryName={item.beneficiary_name}
            amount={formatCurrency(item.amount)}
            date={formatDate(item.completed_at)}
            status={item.status}
            onPress={() => {}}
          />
        )}
        keyExtractor={(_) => _.id}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={renderEmpty}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};
