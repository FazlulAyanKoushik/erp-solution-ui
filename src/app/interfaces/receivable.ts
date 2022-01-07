export interface Receivable {
  _id?:string,
  accountName: string,
  slug: string,
  balance?: number,
  isSubAccount?: boolean,
  parentAccount?: false,
}

