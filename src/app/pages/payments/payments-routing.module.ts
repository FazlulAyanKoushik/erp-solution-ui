import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidedComponent } from './provided/provided.component';
import { ReceiveComponent } from './receive/receive.component';

const routes: Routes = [
  {path:'provided',component:ProvidedComponent},
  {path:'receive',component:ReceiveComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
