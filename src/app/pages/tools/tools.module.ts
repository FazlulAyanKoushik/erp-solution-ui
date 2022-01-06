import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { MyCompaniesComponent } from './my-companies/my-companies.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { SubscriptionInvoiceComponent } from './subscription-invoice/subscription-invoice.component';
import { BkashAgreementsComponent } from './bkash-agreements/bkash-agreements.component';
import { BkashPaymentsComponent } from './bkash-payments/bkash-payments.component';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { PrintersComponent } from './printers/printers.component';
import { SettingsComponent } from './settings/settings.component';
import { SmsHistoryComponent } from './sms-history/sms-history.component';
import { OrganizationInfoComponent } from './organization-info/organization-info.component';


@NgModule({
  declarations: [
    MyCompaniesComponent,
    UsersComponent,
    RolesComponent,
    SubscriptionInvoiceComponent,
    BkashAgreementsComponent,
    BkashPaymentsComponent,
    ActivityLogsComponent,
    AuditLogComponent,
    PrintersComponent,
    SettingsComponent,
    SmsHistoryComponent,
    OrganizationInfoComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
