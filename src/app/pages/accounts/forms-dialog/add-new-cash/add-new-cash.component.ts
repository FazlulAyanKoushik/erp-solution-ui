import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  constructor() { }

  ngOnInit(): void {
    this.getDummyData();
  }

  getDummyData(){
    this.filteredCatList=[
      {
        _id:'123456789',
        categoryName:'AB Bank',
      }
    ]
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
}
