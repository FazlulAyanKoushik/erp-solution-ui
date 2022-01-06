import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { Pagination } from 'src/app/interfaces/pagination';
import { AccountService } from 'src/app/services/account.service';
import { ReloadService } from 'src/app/services/reload.service';
import { UiService } from 'src/app/services/ui.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-chart-of-accounts',
  templateUrl: './chart-of-accounts.component.html',
  styleUrls: ['./chart-of-accounts.component.scss']
})
export class ChartOfAccountsComponent implements OnInit {


   // Subscriptions
   private subAcRoute: Subscription;
   private subForm: Subscription;
 
   // DOWNLOADABLE
   dataTypeFormat = 'json';
 
   allBlogs: any[] = [];
   holdPrevData: Blog[] = [];
 
   // Pagination
   currentPage = 1;
   totalProducts = 0;
   productsPerPage = 2;
   totalProductsStore = 0;
 
   // SEARCH AREA
   searchProducts: Blog[] = [];
   searchQuery = null;
   @ViewChild('searchForm') searchForm: NgForm;
   @ViewChild('searchInput') searchInput: ElementRef;
 
   // Selected Data
   selectedIds: string[] = [];
   @ViewChild('matCheckbox') matCheckbox: MatCheckbox;
 
   // Filter Date Range
   today = new Date();
   dataFormDateRange = new FormGroup({
     start: new FormControl(),
     end: new FormControl()
   });

   //component Control
   activeComponent:string='asset';
   
   constructor(
     private dialog: MatDialog,
     private accountService: AccountService,
     private uiService: UiService,
     private reloadService: ReloadService,
     private spinner: NgxSpinnerService,
     private utilsService: UtilsService,
     private router: Router,
     private activatedRoute: ActivatedRoute,
   ) { }
 
   ngOnInit(): void {
     //remove ltr
    
     // this.reloadService.refreshBlog$
     //   .subscribe(() => {
     //     this.getAllBlogs();
     //   });
 
     // GET PAGE FROM QUERY PARAM
     this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
       if (qParam && qParam.page) {
         this.currentPage = qParam.page;
       } else {
         this.currentPage = 1;
       }
       if (!this.searchProducts.length) {
         this.getAllBlogs();
       }
     });
   }
 
  //  ngAfterViewInit(): void {
  //    const formValue = this.searchForm.valueChanges;
 
  //    this.subForm = formValue.pipe(
  //      // map(t => t.searchTerm)
  //      // filter(() => this.searchForm.valid),
  //      pluck('searchTerm'),
  //      debounceTime(200),
  //      distinctUntilChanged(),
  //      switchMap(data => {
  //        this.searchQuery = data;
  //        if (this.searchQuery === '' || this.searchQuery === null) {
  //          this.searchProducts = [];
  //          this.allBlogs = this.holdPrevData;
  //          this.totalProducts = this.totalProductsStore;
  //          this.searchProducts = [];
  //          this.searchQuery = null;
  //          return EMPTY;
  //        }
  //        const pagination: Pagination = {
  //          pageSize: this.productsPerPage.toString(),
  //          currentPage: this.currentPage.toString()
  //        };
  //        // const filter = {marketer: {$in: [null]}};
  //        //return this.accountService.getSearchProduct(data, pagination, null);
  //        return [];
  //      })
  //    )
  //      .subscribe(res => {
  //        this.searchProducts = res.data;
  //        this.allBlogs = this.searchProducts;
  //        this.totalProducts = res.count;
  //        this.currentPage = 1;
  //        this.router.navigate([], {queryParams: {page: this.currentPage}});
  //      }, error => {
  //        console.log(error)
  //      });
  //  }
 
 
   /**
    * COMPONENT DIALOG VIEW
    */
   // public openConfirmDialog(data?: string) {
   //   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
   //     maxWidth: '400px',
   //     data: {
   //       title: 'Confirm Delete',
   //       message: 'Are you sure you want delete this category?'
   //     }
   //   });
   //   dialogRef.afterClosed().subscribe(dialogResult => {
   //     if (dialogResult) {
   //       this.deleteBlog(data);
   //     }
   //   });
   // }
 
   /**
    * HTTP REQ HANDLE
    */
 
   private getAllBlogs() {
     this.spinner.show();
     const pagination: Pagination = {
       pageSize: this.productsPerPage.toString(),
       currentPage: this.currentPage.toString()
     };
    //  dummyData delete later
    let dData={
      date:'01-01-2022',
      slipNo:'#10256',
      customer:'softlabIt',
      contactNo:'01733221166',
      orderNo:'#33',
      total:'650',
      due:'200',

    }
    this.allBlogs.push(dData);
     const sort = {createdAt: -1};
     // this.accountService.getAllBlogs(pagination, sort, null, null)
     //   .subscribe(res => {
     //     console.log(res)
     //     this.spinner.hide();
     //     this.allBlogs = res.data;
     //     if (this.allBlogs && this.allBlogs.length) {
     //       this.allBlogs.forEach((m, i) => {
     //         const index = this.selectedIds.findIndex(f => f === m._id);
     //         this.allBlogs[i].select = index !== -1;
     //       });
     //       this.holdPrevData = res.data;
     //       this.totalProducts = res.count;
     //       this.totalProductsStore = res.count;
     //       this.checkSelectionData();
     //     }
     //   }, error => {
     //     this.spinner.hide();
     //     console.log(error);
     //   });
   }
 
   /**
    * DELETE METHOD HERE
    */
   private deleteBlog(id: string) {
     // this.accountService.deleteBlog(id)
     //   .subscribe(res => {
     //     this.uiService.success(res.message);
     //     this.reloadService.needRefreshBlog$();
     //   }, error => {
     //     console.log(error);
     //   });
   }
 
 
   /**
    * ON Select Check
    */
 
   onCheckChange(event: any, index: number, id: string) {
     if (event) {
       this.selectedIds.push(id);
     } else {
       const i = this.selectedIds.findIndex(f => f === id);
       this.selectedIds.splice(i, 1);
     }
   }
 
   onAllSelectChange(event: MatCheckboxChange) {
     // const currentPageIds = this.allBlogs.map(m => m._id);
     if (event.checked) {
       // this.selectedIds = this.utilsService.mergeArrayString(this.selectedIds, currentPageIds)
       // this.allBlogs.forEach(m => {
       //   m.select = true;
       // })
     } else {
       // currentPageIds.forEach(m => {
       //   // this.allBlogs.find(f => f._id === m).select = false;
       //   // const i = this.selectedIds.findIndex(f => f === m);
       //   // this.selectedIds.splice(i, 1);
       // })
     }
   }
 
   private checkSelectionData() {
     let isAllSelect = true;
     this.allBlogs.forEach(m => {
       // if (!m.select) {
       //   isAllSelect = false;
       // }
     });
 
     this.matCheckbox.checked = isAllSelect;
   }
   /*  
  * On Change  Component Click 
   */
  public onChangeComponent(componentName){

    this.activeComponent=componentName;
    
  }
   /**
    * PAGINATION CHANGE
    */
   public onPageChanged(event: any) {
     this.router.navigate([], {queryParams: {page: event}});
   }
 
   /**
    * FILTER DATA With Date Range
    */
 
   endChangeRegDateRange(event: MatDatepickerInputEvent<any>) {
     if (event.value) {
       // const startDate = this.utilsService.getDateString(this.dataFormDateRange.value.start);
       // const endDate = this.utilsService.getDateString(this.dataFormDateRange.value.end);
 
       // const qData = {createdAt: {'$gte': startDate, '$lte': endDate}};
       // const index = this.query.findIndex(x => x.hasOwnProperty('createdAt'));
       // if (index < 0) {
       //   this.query.push(qData);
       // } else {
       //   this.query[index] = {createdAt: {'$gte': startDate, '$lte': endDate}}
       // }
       //
       // console.log(this.query);
       // if (this.currentPage > 1) {
       //   this.router.navigate([], {queryParams: {page: 1}});
       // } else {
       //   this.getAllUsers();
       // }
     }
   }
 
 
   /**
    * ON DESTROY
    */
 
   ngOnDestroy() {
     if (this.subAcRoute) {
       this.subAcRoute.unsubscribe();
     }
   }

}
