import { FC, useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { Props } from './types';
import { styles } from './styles';
import { useGetTransactions } from '../../services/query/transaction/useGetTransactions';
import { TransactionCard } from '../../components/TransactionCard/TransactionCard';
import { COLOR } from '../../theme/color';
import { formatCurrency, formatDate } from '../../utils/helpers';

export const TransactionList: FC<Props> = () => {
  const {
    data,
    isLoading,
    refetch,
  } = useGetTransactions({});
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

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
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
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
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};
