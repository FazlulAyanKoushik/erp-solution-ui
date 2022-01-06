import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsServicesRoutingModule } from './items-services-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ItemLocationComponent } from './item-location/item-location.component';
import { ItemCategoriesComponent } from './item-categories/item-categories.component';
import { MeasurementUnitsComponent } from './measurement-units/measurement-units.component';
import { TaxesComponent } from './taxes/taxes.component';
import { ImportItemsComponent } from './import-items/import-items.component';
import { PrintBarcodeComponent } from './print-barcode/print-barcode.component';


@NgModule({
  declarations: [
    ItemListComponent,
    ServiceListComponent,
    ItemLocationComponent,
    ItemCategoriesComponent,
    MeasurementUnitsComponent,
    TaxesComponent,
    ImportItemsComponent,
    PrintBarcodeComponent
  ],
  imports: [
    CommonModule,
    ItemsServicesRoutingModule
  ]
})
export class ItemsServicesModule { }
