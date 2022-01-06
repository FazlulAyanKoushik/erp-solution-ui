import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AssetComponent } from './chart-of-accounts/asset/asset.component';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';

const routes: Routes = [
  
    
  {path: 'account-statement', component: AccountStatementComponent,},
  {path: 'chart-of-accounts', component: ChartOfAccountsComponent,},
  {path: 'payment-methods', component: PaymentMethodsComponent,},
  {path: 'asset',component:AssetComponent,}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
