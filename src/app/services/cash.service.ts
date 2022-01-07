import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Cash} from '../interfaces/cash';

const API_CASH = environment.apiBaseLink + '/api/cash/';


@Injectable({
  providedIn: 'root'
})
export class CashService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Cash
   */
  addCash(data: Cash) {
    return this.httpClient.post<{message: string}>(API_CASH + 'add-cash', data);
  }

  getAllCashs() {
    return this.httpClient.get<{data: Cash[], message?: string}>(API_CASH + 'get-all-cashs');
  }

  getCashByCashID(id: string) {
    return this.httpClient.get<{data: Cash, message?: string}>(API_CASH + 'get-cash-by-cash-id/' + id);
  }

  getSingleCashBySlug(slug: string) {
    return this.httpClient.get<{ data: Cash, message: string }>(API_CASH + 'get-single-cash-by-slug/' + slug);
  }

  editCashData(data: Cash) {
    return this.httpClient.put<{message?: string}>(API_CASH + 'edit-cash-by-cash', data);
  }

  deleteCash(id: string) {
    return this.httpClient.delete<{message?: string}>(API_CASH + 'delete-cash-by-id/' + id);
  }
}
