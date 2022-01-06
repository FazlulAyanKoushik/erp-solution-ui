import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewIncomeComponent } from '../../forms-dialog/add-new-income/add-new-income.component';
import { AddNewRevinueComponent } from '../../forms-dialog/add-new-revinue/add-new-revinue.component';
import { AddNewSaleComponent } from '../../forms-dialog/add-new-sale/add-new-sale.component';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

   
  selectedIds:string[]=[];
  
  allBlogs:any[]=[];

  //
  productsPerPage=2;
  currentPage=1;
  totalProducts=0;
  
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }
   /* openAddComponentDialog */
   openAddComponentDialog(dialogName:string){
    if(dialogName === 'sale'){
      const dialogRef = this.dialog.open(AddNewSaleComponent, {
        panelClass: ['theme-dialog'],
        width: '80%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'income'){
        const dialogRef = this.dialog.open(AddNewIncomeComponent, {
        panelClass: ['theme-dialog'],
        width: '80%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'revinue'){
      const dialogRef = this.dialog.open(AddNewRevinueComponent, {
        panelClass: ['theme-dialog'],
        width: '80%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    
  }

  onAllSelectChange(event){

  }

  onCheckChange(event: any, index: number, id: string) {
    if (event) {
      this.selectedIds.push(id);
    } else {
      const i = this.selectedIds.findIndex(f => f === id);
      this.selectedIds.splice(i, 1);
    }
  }

}
