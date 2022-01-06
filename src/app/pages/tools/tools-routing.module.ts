import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { BkashAgreementsComponent } from './bkash-agreements/bkash-agreements.component';
import { BkashPaymentsComponent } from './bkash-payments/bkash-payments.component';
import { MyCompaniesComponent } from './my-companies/my-companies.component';
import { OrganizationInfoComponent } from './organization-info/organization-info.component';
import { PrintersComponent } from './printers/printers.component';
import { RolesComponent } from './roles/roles.component';
import { SettingsComponent } from './settings/settings.component';
import { SmsHistoryComponent } from './sms-history/sms-history.component';
import { SubscriptionInvoiceComponent } from './subscription-invoice/subscription-invoice.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'activity-logs',component:ActivityLogsComponent},
  {path:'audit-log',component:AuditLogComponent},
  {path:'bkash-agreements',component:BkashAgreementsComponent},
  {path:'bkash-payments',component:BkashPaymentsComponent},
  {path:'my-companies',component:MyCompaniesComponent},

  {path:'organization-info',component:OrganizationInfoComponent},
  {path:'roles',component:RolesComponent},
  {path:'settings',component:SettingsComponent},
  {path:'sms-history',component:SmsHistoryComponent},
  {path:'subscription-invoice',component:SubscriptionInvoiceComponent},
  {path:'users',component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
