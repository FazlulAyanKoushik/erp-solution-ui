import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-add-new-cash',
  templateUrl: './add-new-cash.component.html',
  styleUrls: ['./add-new-cash.component.scss']
})
export class AddNewCashComponent implements OnInit {

  //data from
  dataForm?: FormGroup;
  //
  categories:any[]=[];
  //
  public filteredCatList: any[];
  //isSubCat
  isSubCategory=false;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddNewCashComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getDummyData();
    this.initFormData();
  }

  getDummyData(){
    this.filteredCatList=[
      {
        _id:'123456789',
        categoryName:'AB Bank',
      }
    ]
  }
  /* 
  * Initialze Dataform
  */
  initFormData(){

    this.dataForm=this.fb.group({
      accountName: [this.data?this.data.accountName:null, Validators.required],
      isSubAccount: [this.data?true:false],
      parentAccount: [this.filteredCatList],
    })
  }

  /**
   * SELECTION CHANGE
   */

  onSelectCategory(event: MatSelectChange) {
      // this.categoryAttributes = this.categories.find(f => f._id === event.value).attributes as ProductAttribute[];
      // this.dataForm.patchValue({subCategory: null});
      // // this.removeAttributesFormArray();
      // this.getAllSubCategoryByCategoryId(event.value, true);
  }

  onSelectSubCategory(){
    this.isSubCategory=!this.isSubCategory
  }

  onSubmit(){

  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
