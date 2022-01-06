import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { MenuAdmin } from '../interfaces/menu-admin';
import {map} from 'rxjs/operators';
import { MenuCtrService } from '../services/menu-ctr.service';
import { menuItemsSuperAdmin} from '../core/utils/admin-menu';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  @Output() @ViewChild('sidenav', {static: true}) sidenav;
  @Input() isAdminMenu = false;
  @Input() sideNavMenuList: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        return result.matches;
      })
    );

  isMidDevice$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
    .pipe(
      map(result => {
        return result.matches;
      })
    );

  // Store Data
  menuList: MenuAdmin[] = [];


  constructor(
    private breakpointObserver: BreakpointObserver,
    private meta: Meta,
    private menuCtrService: MenuCtrService,
    private router: Router,
   // private adminService: AdminService,
  ) {
  }

  ngOnInit() {
    // Google No Index
    this.googleNoIndex();

   // const role = this.adminService.getAdminRole();
   const role='superadmin'
    console.log(role)
    this.menuList=menuItemsSuperAdmin;
    // switch (role) {
    //   case AdminRoleEnum.SUPER_ADMIN: {
    //     this.menuList = menuItemsSuperAdmin;
    //     break;
    //   }
    //   case AdminRoleEnum.ADMIN: {
    //     this.menuList = menuItemsAdmin;
    //     break;
    //   }
    //   case AdminRoleEnum.EDITOR: {
    //     this.menuList = menuItemsEditor;
    //     break;
    //   }
    //   default: {
    //     this.menuList = [];
    //     break;
    //   }
    // }
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (window.innerWidth <= 599) {
          this.sidenav.close();
        }
      }
    });
    this.menuCtrService.expandActiveSubMenuAdmin(this.menuList);
  }


  /**
   * SEO TITLE
   * SEO META TAGS
   */

  private googleNoIndex() {
    this.meta.updateTag({name: 'robots', content: 'noindex'});
    this.meta.updateTag({name: 'googlebot', content: 'noindex'});
  }

}
