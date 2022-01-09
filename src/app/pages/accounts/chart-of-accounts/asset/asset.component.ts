import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewBankComponent } from '../../forms-dialog/add-new-bank/add-new-bank.component';
import { AddNewCashComponent } from '../../forms-dialog/add-new-cash/add-new-cash.component';
import { AddNewEquipmentComponent } from '../../forms-dialog/add-new-equipment/add-new-equipment.component';
import { AddNewInventoryComponent } from '../../forms-dialog/add-new-inventory/add-new-inventory.component';
import { AddNewMobileBankComponent } from '../../forms-dialog/add-new-mobile-bank/add-new-mobile-bank.component';
import { AddNewReceivableComponent } from '../../forms-dialog/add-new-receivable/add-new-receivable.component';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  selectedIds:string[]=[];
  
  allBlogs:any[]=[];

  //
  productsPerPage=2;
  currentPage=1;
  totalProducts=0;
  
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getDummyData();
  }
  
  /* 
  *Dummy Data
   */

  getDummyData(){
   let blog={
      cash:"Petty Cash",
      currentBalance:2300
    }
    this.allBlogs.push(blog);
  }
  /*
  * openAddComponentDialog
  */
  openAddComponentDialog(dialogName:string){
    if(dialogName === 'cash'){
      const dialogRef = this.dialog.open(AddNewCashComponent, {
        data:null,
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'bank'){
        const dialogRef = this.dialog.open(AddNewBankComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'mobileBank'){
      const dialogRef = this.dialog.open(AddNewMobileBankComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'receivable'){
      const dialogRef = this.dialog.open(AddNewReceivableComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    } 
    if(dialogName === 'equipment'){
      const dialogRef = this.dialog.open(AddNewEquipmentComponent,
         {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'inventory'){
      const dialogRef = this.dialog.open(AddNewInventoryComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }

    
  }

  /* 
  * openEditDialog()
  */
  openEditDialog(dialogName,i){
    console.log(i)
    if(dialogName === 'cash'){
      const dialogRef = this.dialog.open(AddNewCashComponent, {
        data:{
          accountName:i,
        },
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'bank'){
        const dialogRef = this.dialog.open(AddNewBankComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'mobileBank'){
      const dialogRef = this.dialog.open(AddNewMobileBankComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'receivable'){
      const dialogRef = this.dialog.open(AddNewReceivableComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    } 
    if(dialogName === 'equipment'){
      const dialogRef = this.dialog.open(AddNewEquipmentComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'inventory'){
      const dialogRef = this.dialog.open(AddNewInventoryComponent, {
        panelClass: ['theme-dialog'],
        width: '50%',
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
