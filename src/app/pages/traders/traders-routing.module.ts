import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from '../purchases/suppliers/suppliers.component';
import { CustomersComponent } from '../sales/customers/customers.component';
import { ImportTradersComponent } from './import-traders/import-traders.component';

const routes: Routes = [
  {path:'customers',component:CustomersComponent},
  {path:'import-traders',component:ImportTradersComponent},
  {path:'suppliers',component:SuppliersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradersRoutingModule { }
