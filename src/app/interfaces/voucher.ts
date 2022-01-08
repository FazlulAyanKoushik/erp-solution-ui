export interface Voucher {
  _id?:string,
  voucherNo: string,
  transactionType: string,
  transactionTypeSlug: string,
  transactionAccount: string,
  account: string,
  amount: number,
  note?: string,
}
