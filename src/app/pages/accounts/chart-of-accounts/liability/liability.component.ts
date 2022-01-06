import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewEquityComponent } from '../../forms-dialog/add-new-equity/add-new-equity.component';
import { AddNewPayableComponent } from '../../forms-dialog/add-new-payable/add-new-payable.component';
import { AddNewTaxComponent } from '../../forms-dialog/add-new-tax/add-new-tax.component';

@Component({
  selector: 'app-liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.scss']
})
export class LiabilityComponent implements OnInit {

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
  }

  /* openAddComponentDialog */
  openAddComponentDialog(dialogName:string){
    if(dialogName === 'payable'){
      const dialogRef = this.dialog.open(AddNewPayableComponent, {
        panelClass: ['theme-dialog'],
        width: '80%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'tax'){
        const dialogRef = this.dialog.open(AddNewTaxComponent, {
        panelClass: ['theme-dialog'],
        width: '80%',
        maxWidth: '1050px',
        autoFocus: false,
        disableClose: false
      });
    }
    if(dialogName === 'equity'){
      const dialogRef = this.dialog.open(AddNewEquityComponent, {
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
