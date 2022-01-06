import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakePurchaseOrderComponent } from './make-purchase-order/make-purchase-order.component';
import { MakePurchaseComponent } from './make-purchase/make-purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {path:'make-purchase',component:MakePurchaseComponent},
  {path:'make-purchase-order',component:MakePurchaseOrderComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'purchase-order',component:PurchaseOrderComponent},
  {path:'purchase-return',component:PurchaseReturnComponent},
  {path:'suppliers',component:SuppliersComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
