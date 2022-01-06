import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearingChequeComponent } from './clearing-cheque/clearing-cheque.component';
import { IncomeComponent } from './income/income.component';
import { PayExpenseComponent } from './pay-expense/pay-expense.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {path:'clearing-cheque',component:ClearingChequeComponent},
  {path:'income',component:IncomeComponent},
  {path:'pay-expenses',component:PayExpenseComponent},
  {path:'vouchers',component:VouchersComponent},
  {path:'withdraw',component:WithdrawComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
