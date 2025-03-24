import { Transactions } from './types';
import { fetch } from '../../utils/fetcher';

export const getTransactions = async () => (
  await fetch<Transactions>({
    method: 'GET',
    url: 'https://recruitment-test.flip.id/frontend-test',
  })
);
