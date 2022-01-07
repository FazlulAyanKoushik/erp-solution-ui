export interface Cash {
  _id?:string,
  accountName: string,
  slug: string,
  balance?: number,
  isSubAccount?: boolean,
  parentAccount?: false,
}
