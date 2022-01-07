export interface MobileBank {
  _id?:string,
  accountName: string,
  slug: string,
  balance?: number,
  cashOutBalance?: number,
  cashOutCharge?: number,
  isSubAccount?: boolean,
  parentAccount?: false,
}
