import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTransferComponent } from '../stocks/stock-transfer/stock-transfer.component';
import { AgedAccountPayableComponent } from './aged-account-payable/aged-account-payable.component';
import { AgedAccountReceivableComponent } from './aged-account-receivable/aged-account-receivable.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { CasierWiseCashSummaryReportComponent } from './casier-wise-cash-summary-report/casier-wise-cash-summary-report.component';
import { CourierStatementComponent } from './courier-statement/courier-statement.component';
import { CustomerCollectionComponent } from './customer-collection/customer-collection.component';
import { CustomerLedgerComponent } from './customer-ledger/customer-ledger.component';
import { CustomerStatementComponent } from './customer-statement/customer-statement.component';
import { CustomerWiseItemProfitReportComponent } from './customer-wise-item-profit-report/customer-wise-item-profit-report.component';
import { DayClosingComponent } from './day-closing/day-closing.component';
import { ExpenseDetailReportComponent } from './expense-detail-report/expense-detail-report.component';
import { ExpenseSummaryReportComponent } from './expense-summary-report/expense-summary-report.component';
import { ItemSaleSummaryComponent } from './item-sale-summary/item-sale-summary.component';
import { ItemWiseSalesReportComponent } from './item-wise-sales-report/item-wise-sales-report.component';
import { MonthToDateSalesComponent } from './month-to-date-sales/month-to-date-sales.component';
import { ProfitLossStatementComponent } from './profit-loss-statement/profit-loss-statement.component';
import { PurchaseRegisterComponent } from './purchase-register/purchase-register.component';
import { RepresentativeWiseSalesReportComponent } from './representative-wise-sales-report/representative-wise-sales-report.component';
import { SalesRegisterComponent } from './sales-register/sales-register.component';
import { StockReportAllComponent } from './stock-report-all/stock-report-all.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { StockTransactionReportComponent } from './stock-transaction-report/stock-transaction-report.component';
import { SupplierLedgerComponent } from './supplier-ledger/supplier-ledger.component';
import { SupplierStatementComponent } from './supplier-statement/supplier-statement.component';
import { TaxComputationComponent } from './tax-computation/tax-computation.component';
import { TodaysTransactionReportComponent } from './todays-transaction-report/todays-transaction-report.component';
import { UpcomingInstallmentsComponent } from './upcoming-installments/upcoming-installments.component';

const routes: Routes = [
  {path:'aged-account-payable',component:AgedAccountPayableComponent},
  {path:'aged-account-receivable',component:AgedAccountReceivableComponent},
  {path:'balance-sheet',component:BalanceSheetComponent},
  {path:'casier-wise-cash-summery-report',component:CasierWiseCashSummaryReportComponent},
  {path:'courier-statement',component:CourierStatementComponent},
  {path:'customer-collection',component:CustomerCollectionComponent},
  {path:'customer-ledger',component:CustomerLedgerComponent},
  {path:'customer-statement',component:CustomerStatementComponent},
  {path:'customer-wise-item-profit-report',component:CustomerWiseItemProfitReportComponent},
  {path:'day-closing',component:DayClosingComponent},
  {path:'expense-detail-report',component:ExpenseDetailReportComponent},
  {path:'expense-summary-report',component:ExpenseSummaryReportComponent},
  {path:'item-sale-summary',component:ItemSaleSummaryComponent},
  {path:'item-wise-sales-report',component:ItemWiseSalesReportComponent},
  {path:'month-to-date-sales',component:MonthToDateSalesComponent},
  {path:'profit-loss-statement',component:ProfitLossStatementComponent},
  {path:'purchaseRegister',component:PurchaseRegisterComponent},
  {path:'representatives-wise-sales-report',component:RepresentativeWiseSalesReportComponent},
  {path:'sales-register',component:SalesRegisterComponent},
  {path:'stock-report',component:StockReportComponent},
  {path:'stock-report-all',component:StockReportAllComponent},
  {path:'stock-transaction-report',component:StockTransactionReportComponent},
  {path:'stock-transfer-report',component:StockTransferComponent},
  {path:'supplier-ledger',component:SupplierLedgerComponent},
  {path:'supplier-statement',component:SupplierStatementComponent},
  {path:'tax-computation',component:TaxComputationComponent},
  {path:'todays-transaction-report',component:TodaysTransactionReportComponent},
  {path:'upcoming-installments',component:UpcomingInstallmentsComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
