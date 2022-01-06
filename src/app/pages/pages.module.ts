import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MenuModule } from '../core/menu/menu.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MenuModule,
    MaterialModule,
  ]
})
export class PagesModule { }
