import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './production/production.component';
import { StockAdjustmentComponent } from './stock-adjustment/stock-adjustment.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockTransferComponent } from './stock-transfer/stock-transfer.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  {path:'production',component:ProductionComponent},
  {path:'stock-adjustment',component:StockAdjustmentComponent},
  {path:'stock-list',component:StockListComponent},
  {path:'stock-transfer',component:StockTransferComponent},
  {path:'warehouse',component:WarehouseComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
