import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private refreshBlogs = new Subject<void>();


  /**
   * refreshBlog
   */
   get refreshBlogs$() {
    return this.refreshBlogs;
  }

  needRefreshBlogs$() {
    this.refreshBlogs.next();
  }
  constructor() { }
}
