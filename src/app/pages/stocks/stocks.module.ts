import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockAdjustmentComponent } from './stock-adjustment/stock-adjustment.component';
import { StockTransferComponent } from './stock-transfer/stock-transfer.component';
import { ProductionComponent } from './production/production.component';


@NgModule({
  declarations: [
    WarehouseComponent,
    StockListComponent,
    StockAdjustmentComponent,
    StockTransferComponent,
    ProductionComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
