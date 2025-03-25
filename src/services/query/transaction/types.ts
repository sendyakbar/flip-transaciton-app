import { UseQueryOptions } from '@tanstack/react-query';
import { Transactions } from '../../model/transaction/types';

export type Params = UseQueryOptions<Awaited<Transactions>>;
