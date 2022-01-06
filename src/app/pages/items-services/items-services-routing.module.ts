import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportItemsComponent } from './import-items/import-items.component';
import { ItemCategoriesComponent } from './item-categories/item-categories.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemLocationComponent } from './item-location/item-location.component';
import { MeasurementUnitsComponent } from './measurement-units/measurement-units.component';
import { PrintBarcodeComponent } from './print-barcode/print-barcode.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { TaxesComponent } from './taxes/taxes.component';

const routes: Routes = [
  {path:'import-items',component:ImportItemsComponent},
  {path:'item-categories',component:ItemCategoriesComponent},
  {path:'item-list',component:ItemListComponent},
  {path:'item-location',component:ItemLocationComponent},
  {path:'measurement-units',component:MeasurementUnitsComponent},
  {path:'print-barcode',component:PrintBarcodeComponent},
  {path:'service-list',component:ServiceListComponent},
  {path:'taxes',component:TaxesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsServicesRoutingModule { }
