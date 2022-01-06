import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourierPaymentComponent } from './courier-payment/courier-payment.component';
import { CourierServiceModule } from './courier-service.module';
import { CourierServicesComponent } from './courier-services/courier-services.component';

const routes: Routes = [
  {path:'courier-payment',component:CourierPaymentComponent},
  {path:'courier-service',component:CourierServicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourierServiceRoutingModule { }
