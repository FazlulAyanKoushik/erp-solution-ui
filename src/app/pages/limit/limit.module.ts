import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimitRoutingModule } from './limit-routing.module';
import { LimitComponent } from './limit.component';


@NgModule({
  declarations: [
    LimitComponent
  ],
  imports: [
    CommonModule,
    LimitRoutingModule
  ]
})
export class LimitModule { }
