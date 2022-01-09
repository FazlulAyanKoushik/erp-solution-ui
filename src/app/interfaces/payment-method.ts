import {Bank} from "./bank";

export interface PaymentMethod {
  _id?:string,
  paymentType: string,
  name: string,
  slug: string,
  bank: string | Bank;
  charge?: number,
  description?: string,
}
