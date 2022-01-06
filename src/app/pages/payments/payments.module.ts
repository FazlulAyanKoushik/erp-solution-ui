import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ProvidedComponent } from './provided/provided.component';
import { ReceiveComponent } from './receive/receive.component';


@NgModule({
  declarations: [
    ProvidedComponent,
    ReceiveComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
