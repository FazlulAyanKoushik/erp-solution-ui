import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourierServiceRoutingModule } from './courier-service-routing.module';
import { CourierServicesComponent } from './courier-services/courier-services.component';
import { CourierPaymentComponent } from './courier-payment/courier-payment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CourierServicesComponent,
    CourierPaymentComponent
  ],
  imports: [
    CommonModule,
    CourierServiceRoutingModule,
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
export class CourierServiceModule { }
