import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { CustomerStatementComponent } from './customer-statement/customer-statement.component';
import { SupplierStatementComponent } from './supplier-statement/supplier-statement.component';
import { CustomerCollectionComponent } from './customer-collection/customer-collection.component';
import { CourierStatementComponent } from './courier-statement/courier-statement.component';
import { SalesRegisterComponent } from './sales-register/sales-register.component';
import { PurchaseRegisterComponent } from './purchase-register/purchase-register.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { BalanceSheetAllComponent } from './balance-sheet-all/balance-sheet-all.component';
import { ProfitLossStatementComponent } from './profit-loss-statement/profit-loss-statement.component';
import { TaxComputationComponent } from './tax-computation/tax-computation.component';
import { AgedAccountReceivableComponent } from './aged-account-receivable/aged-account-receivable.component';
import { AgedAccountPayableComponent } from './aged-account-payable/aged-account-payable.component';
import { TodaysTransactionReportComponent } from './todays-transaction-report/todays-transaction-report.component';
import { MonthToDateSalesComponent } from './month-to-date-sales/month-to-date-sales.component';
import { ItemWiseSalesReportComponent } from './item-wise-sales-report/item-wise-sales-report.component';
import { RepresentativeWiseSalesReportComponent } from './representative-wise-sales-report/representative-wise-sales-report.component';
import { UpcomingInstallmentsComponent } from './upcoming-installments/upcoming-installments.component';
import { ItemSaleSummaryComponent } from './item-sale-summary/item-sale-summary.component';
import { CustomerWiseItemProfitReportComponent } from './customer-wise-item-profit-report/customer-wise-item-profit-report.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { StockReportAllComponent } from './stock-report-all/stock-report-all.component';
import { StockTransactionReportComponent } from './stock-transaction-report/stock-transaction-report.component';
import { StockTransferReportComponent } from './stock-transfer-report/stock-transfer-report.component';
import { CustomerLedgerComponent } from './customer-ledger/customer-ledger.component';
import { SupplierLedgerComponent } from './supplier-ledger/supplier-ledger.component';
import { DayClosingComponent } from './day-closing/day-closing.component';
import { CasierWiseCashSummaryReportComponent } from './casier-wise-cash-summary-report/casier-wise-cash-summary-report.component';
import { ExpenseDetailReportComponent } from './expense-detail-report/expense-detail-report.component';
import { ExpenseSummaryReportComponent } from './expense-summary-report/expense-summary-report.component';


@NgModule({
  declarations: [
    CustomerStatementComponent,
    SupplierStatementComponent,
    CustomerCollectionComponent,
    CourierStatementComponent,
    SalesRegisterComponent,
    PurchaseRegisterComponent,
    BalanceSheetComponent,
    BalanceSheetAllComponent,
    ProfitLossStatementComponent,
    TaxComputationComponent,
    AgedAccountReceivableComponent,
    AgedAccountPayableComponent,
    TodaysTransactionReportComponent,
    MonthToDateSalesComponent,
    ItemWiseSalesReportComponent,
    RepresentativeWiseSalesReportComponent,
    UpcomingInstallmentsComponent,
    ItemSaleSummaryComponent,
    CustomerWiseItemProfitReportComponent,
    StockReportComponent,
    StockReportAllComponent,
    StockTransactionReportComponent,
    StockTransferReportComponent,
    CustomerLedgerComponent,
    SupplierLedgerComponent,
    DayClosingComponent,
    CasierWiseCashSummaryReportComponent,
    ExpenseDetailReportComponent,
    ExpenseSummaryReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
