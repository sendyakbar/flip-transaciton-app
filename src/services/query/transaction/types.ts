import { UseQueryOptions } from '@tanstack/react-query';
import { Transactions } from '../../model/transaction/types';

export type Params = {
  options?: Partial<
    UseQueryOptions<Awaited<Transactions>>
  >;
};
