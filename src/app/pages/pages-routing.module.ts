import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsModule } from './accounts/accounts.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'account',
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'courier',
        loadChildren: () => import('./courier-service/courier-service.module').then(m => m.CourierServiceModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'items-services',
        loadChildren: () => import('./items-services/items-services.module').then(m => m.ItemsServicesModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'limit',
        loadChildren: () => import('./limit/limit.module').then(m => m.LimitModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'purchase',
        loadChildren: () => import('./purchases/purchases.module').then(m => m.PurchasesModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'stocks',
        loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'tools',
        loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'traders',
        loadChildren: () => import('./traders/traders.module').then(m => m.TradersModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'transactions',
        loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
       // canActivate: [CheckAuthAccessGuard]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
