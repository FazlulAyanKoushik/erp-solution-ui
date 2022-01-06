import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssetComponent } from './chart-of-accounts/asset/asset.component';
import { LiabilityComponent } from './chart-of-accounts/liability/liability.component';
import { IncomeComponent } from './chart-of-accounts/income/income.component';
import { ExpenseComponent } from './chart-of-accounts/expense/expense.component';
import { AddNewCashComponent } from './forms-dialog/add-new-cash/add-new-cash.component';
import { AddNewBankComponent } from './forms-dialog/add-new-bank/add-new-bank.component';
import { AddNewMobileBankComponent } from './forms-dialog/add-new-mobile-bank/add-new-mobile-bank.component';
import { AddNewReceivableComponent } from './forms-dialog/add-new-receivable/add-new-receivable.component';
import { AddNewInventoryComponent } from './forms-dialog/add-new-inventory/add-new-inventory.component';
import { AddNewEquipmentComponent } from './forms-dialog/add-new-equipment/add-new-equipment.component';
import { AddNewPayableComponent } from './forms-dialog/add-new-payable/add-new-payable.component';
import { AddNewTaxComponent } from './forms-dialog/add-new-tax/add-new-tax.component';
import { AddNewEquityComponent } from './forms-dialog/add-new-equity/add-new-equity.component';
import { AddNewSaleComponent } from './forms-dialog/add-new-sale/add-new-sale.component';
import { AddNewIncomeComponent } from './forms-dialog/add-new-income/add-new-income.component';
import { AddNewRevinueComponent } from './forms-dialog/add-new-revinue/add-new-revinue.component';
import { AddNewExpenseComponent } from './forms-dialog/add-new-expense/add-new-expense.component';
import { AddNewPurchaseComponent } from './forms-dialog/add-new-purchase/add-new-purchase.component';
import { AddNewExpenseInventoryComponent } from './forms-dialog/add-new-expense-inventory/add-new-expense-inventory.component';
import { AddNewCostOfSalesComponent } from './forms-dialog/add-new-cost-of-sales/add-new-cost-of-sales.component';
import { MatSelectFilterModule } from 'mat-select-filter';


@NgModule({
  declarations: [
    ChartOfAccountsComponent,
    AccountStatementComponent,
    PaymentMethodsComponent,
    AssetComponent,
    LiabilityComponent,
    IncomeComponent,
    ExpenseComponent,
    AddNewCashComponent,
    AddNewBankComponent,
    AddNewMobileBankComponent,
    AddNewReceivableComponent,
    AddNewInventoryComponent,
    AddNewEquipmentComponent,
    AddNewPayableComponent,
    AddNewTaxComponent,
    AddNewEquityComponent,
    AddNewSaleComponent,
    AddNewIncomeComponent,
    AddNewRevinueComponent,
    AddNewExpenseComponent,
    AddNewPurchaseComponent,
    AddNewExpenseInventoryComponent,
    AddNewCostOfSalesComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AngularEditorModule,
    // DirectivesModule,
    NgxPaginationModule,
    MatSelectFilterModule
  ]
})
export class AccountsModule { }
