import { Transaction } from '../services/model/transaction/types';

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: Transaction;
};
