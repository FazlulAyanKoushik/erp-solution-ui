import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { MakePurchaseComponent } from './make-purchase/make-purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { MakePurchaseOrderComponent } from './make-purchase-order/make-purchase-order.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    MakePurchaseComponent,
    PurchaseOrderComponent,
    MakePurchaseOrderComponent,
    PurchaseReturnComponent,
    SuppliersComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
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
export class PurchasesModule { }
