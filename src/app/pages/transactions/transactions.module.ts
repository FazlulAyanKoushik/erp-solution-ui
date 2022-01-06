import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { VouchersComponent } from './vouchers/vouchers.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PayExpenseComponent } from './pay-expense/pay-expense.component';
import { IncomeComponent } from './income/income.component';
import { ClearingChequeComponent } from './clearing-cheque/clearing-cheque.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    VouchersComponent,
    WithdrawComponent,
    PayExpenseComponent,
    IncomeComponent,
    ClearingChequeComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
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
export class TransactionsModule { }
