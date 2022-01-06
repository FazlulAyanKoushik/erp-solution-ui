import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { OrderComponent } from './order/order.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { QuotationComponent } from './quotation/quotation.component';

import { MakeQuotationComponent } from './make-quotation/make-quotation.component';
import { ReturnSoldItemComponent } from './return-sold-item/return-sold-item.component';
import { ExchangeSoldItemComponent } from './exchange-sold-item/exchange-sold-item.component';
import { CustomersComponent } from './customers/customers.component';
import { SaleComponent } from './sale/sale.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MakeSaleComponent,
    OrderComponent,
    MakeOrderComponent,
    QuotationComponent,
    MakeQuotationComponent,
    ReturnSoldItemComponent,
    ExchangeSoldItemComponent,
    CustomersComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AngularEditorModule,
    // DirectivesModule,
    NgxPaginationModule
  ]
})
export class SalesModule { }
