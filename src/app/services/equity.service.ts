import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Equity} from '../interfaces/equity';

const API_EQUITY = environment.apiBaseLink + '/api/equity/';


@Injectable({
  providedIn: 'root'
})
export class EquityService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Equity
   */
  addEquity(data: Equity) {
    return this.httpClient.post<{message: string}>(API_EQUITY + 'add-equity', data);
  }

  getAllEquities() {
    return this.httpClient.get<{data: Equity[], message?: string}>(API_EQUITY + 'get-all-equities');
  }

  getEquityByEquityID(id: string) {
    return this.httpClient.get<{data: Equity, message?: string}>(API_EQUITY + 'get-equity-by-equity-id/' + id);
  }

  getSingleEquityBySlug(slug: string) {
    return this.httpClient.get<{ data: Equity, message: string }>(API_EQUITY + 'get-single-equity-by-slug/' + slug);
  }

  editEquityData(data: Equity) {
    return this.httpClient.put<{message?: string}>(API_EQUITY + 'edit-equity-by-equity', data);
  }

  deleteEquity(id: string) {
    return this.httpClient.delete<{message?: string}>(API_EQUITY + 'delete-equity-by-id/' + id);
  }
}
