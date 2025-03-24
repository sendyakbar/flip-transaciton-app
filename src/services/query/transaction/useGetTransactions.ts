import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Params } from './types';
import { getTransactions } from '../../model/transaction/api';

export const useGetTransactions = ({ options }: Params) => {
  const query = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    ...options,
  });

  const data = useMemo(() => {
    if (!query.data) {
      return [];
    }
    return Object.values(query.data);
  }, [query.data]);

  const result = useMemo(() => ({
    ...query,
    data,
  }), [query, data]);

  return result;
};
