import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Sales} from '../interfaces/sales';

const API_SALES = environment.apiBaseLink + '/api/sales/';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Sales
   */
  addSale(data: Sales) {
    return this.httpClient.post<{message: string}>(API_SALES + 'add-sale', data);
  }

  getAllSales() {
    return this.httpClient.get<{data: Sales[], message?: string}>(API_SALES + 'get-all-sales');
  }

  getSaleBySaleID(id: string) {
    return this.httpClient.get<{data: Sales, message?: string}>(API_SALES + 'get-sale-by-sale-id/' + id);
  }

  getSingleSaleBySlug(slug: string) {
    return this.httpClient.get<{ data: Sales, message: string }>(API_SALES + 'get-single-sale-by-slug/' + slug);
  }

  editSaleData(data: Sales) {
    return this.httpClient.put<{message?: string}>(API_SALES + 'edit-sale-by-sale', data);
  }

  deleteSale(id: string) {
    return this.httpClient.delete<{message?: string}>(API_SALES + 'delete-sale-by-id/' + id);
  }
}
