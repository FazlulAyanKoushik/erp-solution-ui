export interface ExpenseInventory {
  _id?:string,
  name: string,
  slug: string,
  balance?: number,
  isSubAccount?: boolean,
  parentAccount?: false,
}
