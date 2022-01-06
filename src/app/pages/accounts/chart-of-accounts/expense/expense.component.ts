import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCashComponent } from '../../forms-dialog/add-new-cash/add-new-cash.component';
import { AddNewExpenseInventoryComponent } from '../../forms-dialog/add-new-expense-inventory/add-new-expense-inventory.component';
import { AddNewExpenseComponent } from '../../forms-dialog/add-new-expense/add-new-expense.component';
import { AddNewPurchaseComponent } from '../../forms-dialog/add-new-purchase/add-new-purchase.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  
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
    if(dialogName === 'expense'){
      const dialogRef = this.dialog.open(AddNewExpenseComponent, {
        panelClass: ['theme-dialog'],
        width: '80%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'purchase'){
        const dialogRef = this.dialog.open(AddNewPurchaseComponent, {
        panelClass: ['theme-dialog'],
        width: '80%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'inventory'){
      const dialogRef = this.dialog.open(AddNewExpenseInventoryComponent, {
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
