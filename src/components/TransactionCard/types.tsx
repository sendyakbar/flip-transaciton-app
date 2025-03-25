import { TransactionStatus } from '../../services/model/transaction/types';

export type Props = {
  senderBank: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  amount: string;
  date: string;
  status: TransactionStatus;
  onPress: () => void;
};
