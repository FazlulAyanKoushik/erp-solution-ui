import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Revenue} from '../interfaces/revenue';

const API_REVENUE = environment.apiBaseLink + '/api/revenue/';


@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Revenue
   */
  addRevenue(data: Revenue) {
    return this.httpClient.post<{message: string}>(API_REVENUE + 'add-revenue', data);
  }

  getAllRevenues() {
    return this.httpClient.get<{data: Revenue[], message?: string}>(API_REVENUE + 'get-all-revenues');
  }

  getRevenueByRevenueID(id: string) {
    return this.httpClient.get<{data: Revenue, message?: string}>(API_REVENUE + 'get-revenue-by-revenue-id/' + id);
  }

  getSingleRevenueBySlug(slug: string) {
    return this.httpClient.get<{ data: Revenue, message: string }>(API_REVENUE + 'get-single-revenue-by-slug/' + slug);
  }

  editRevenueData(data: Revenue) {
    return this.httpClient.put<{message?: string}>(API_REVENUE + 'edit-revenue-by-revenue', data);
  }

  deleteRevenue(id: string) {
    return this.httpClient.delete<{message?: string}>(API_REVENUE + 'delete-revenue-by-id/' + id);
  }
}
