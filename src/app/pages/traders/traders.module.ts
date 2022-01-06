import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradersRoutingModule } from './traders-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ImportTradersComponent } from './import-traders/import-traders.component';


@NgModule({
  declarations: [
    CustomersComponent,
    SuppliersComponent,
    ImportTradersComponent
  ],
  imports: [
    CommonModule,
    TradersRoutingModule
  ]
})
export class TradersModule { }
