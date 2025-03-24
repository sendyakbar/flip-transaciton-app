export enum TransactionStatus {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
}

export type Transactions = {
  [id: string]: {
    id: string;
    amount: number;
    unique_code: number;
    status: TransactionStatus;
    sender_bank: string;
    account_number: string;
    beneficiary_name: string;
    beneficiary_bank: string;
    remark: string;
    created_at: string;
    completed_at: string;
    fee: number;
  };
};
