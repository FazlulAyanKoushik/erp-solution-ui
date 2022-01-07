export interface Equipment {
  _id?:string,
  name: string,
  slug: string,
  balance?: number,
  isSubAccount?: boolean,
  parentAccount?: false,
}
