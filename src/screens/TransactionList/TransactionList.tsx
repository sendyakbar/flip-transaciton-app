import { FC, useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { Props } from './types';
import { styles } from './styles';
import { useGetTransactions } from '../../services/query/transaction/useGetTransactions';
import { TransactionCard } from '../../components/TransactionCard/TransactionCard';
import { COLOR } from '../../theme/color';
import { dateParser, formatCurrency, formatDate } from '../../utils/helpers';
import { Text } from '../../components/Text/Text';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDebounce } from '../../hooks/useDebounce';
import { Filter } from '../../components/Filter/Filter';
import { FILTER } from '../../utils/constants';

export const TransactionList: FC<Props> = ({ navigation }) => {
  const {
    data,
    isLoading,
    refetch,
  } = useGetTransactions();
  const [refreshing, setRefreshing] = useState(false);
  const [processedData, setProcessedData] = useState<typeof data>(data);
  const [selectedFilter, setSelectedFilter] = useState(FILTER.ORDER);
  const [filterVisible, setFilterVisible] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const onSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
    setFilterVisible(false);
    setProcessedData(() => {
      switch (filter) {
        case FILTER.ORDER:
          return data;
        case FILTER.NAME_ASC:
          return [...processedData].sort((a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name));
        case FILTER.NAME_DESC:
          return [...processedData].sort((a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name));
        case FILTER.DATE_DESC:
          return [...processedData].sort((a, b) => {
            const dateA = dateParser(a.created_at).getTime();
            const dateB = dateParser(b.created_at).getTime();
            return dateB - dateA;
          });
        case FILTER.DATE_ASC:
          return [...processedData].sort((a, b) => {
            const dateA = dateParser(a.created_at).getTime();
            const dateB = dateParser(b.created_at).getTime();
            return dateA - dateB;
          });
        default:
          return data;
      }
    });
  };

  const runSearch = useCallback((input: string) => {
    const lowerCaseQuery = input.toLowerCase();
    setProcessedData(() => {
      if (!input) {
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
  }, [data]);

  const { query, setQuery } = useDebounce(runSearch);

  const renderEmpty = useCallback(() => (
    <View style={styles.loading}>
      <Text color={COLOR.GREY} size={16}>No data</Text>
    </View>
  ), []);

  const separator = useCallback(() => (
    <View style={styles.separator} />
  ), []);

  const listData = useMemo(() => {
    return (
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
            date={formatDate(item.created_at)}
            status={item.status}
            onPress={() => {
              navigation.navigate('TransactionDetail', item);
            }}
          />
        )}
        keyExtractor={(_) => _.id}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={renderEmpty}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    );
  }, [
    processedData,
    refreshing,
    navigation,
    onRefresh,
    renderEmpty,
    separator,
  ]);

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
        sortTitle={selectedFilter}
        onPressSort={() => { setFilterVisible(true); }}
        onChangeText={setQuery}
        value={query}
      />
      {listData}
      {filterVisible ? (
        <Filter
          selectedFilter={selectedFilter}
          visible={filterVisible}
          onSelectFilter={onSelectFilter}
        />
      ) : null}
    </View>
  );
};
