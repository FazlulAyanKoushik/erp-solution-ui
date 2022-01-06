import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ExchangeSoldItemComponent } from './exchange-sold-item/exchange-sold-item.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { MakeQuotationComponent } from './make-quotation/make-quotation.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { OrderComponent } from './order/order.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ReturnSoldItemComponent } from './return-sold-item/return-sold-item.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {path:'customers',component:CustomersComponent},
  {path:'exchange-sold-item',component:ExchangeSoldItemComponent},
  {path:'make-order',component:MakeOrderComponent},
  {path:'make-quotation',component:MakeQuotationComponent},
  {path:'make-sale',component:MakeSaleComponent},
  {path:'order',component:OrderComponent},
  {path:'quotation',component:QuotationComponent},
  {path:'return-sold-item',component:ReturnSoldItemComponent},
  {path:'sale',component:SaleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
