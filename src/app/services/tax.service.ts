import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Tax} from '../interfaces/tax';

const API_TAX = environment.apiBaseLink + '/api/tax/';


@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Tax
   */
  addTax(data: Tax) {
    return this.httpClient.post<{message: string}>(API_TAX + 'add-tax', data);
  }

  getAllTaxs() {
    return this.httpClient.get<{data: Tax[], message?: string}>(API_TAX + 'get-all-taxs');
  }

  getTaxByTaxID(id: string) {
    return this.httpClient.get<{data: Tax, message?: string}>(API_TAX + 'get-tax-by-tax-id/' + id);
  }

  getSingleTaxBySlug(slug: string) {
    return this.httpClient.get<{ data: Tax, message: string }>(API_TAX + 'get-single-tax-by-slug/' + slug);
  }

  editTaxData(data: Tax) {
    return this.httpClient.put<{message?: string}>(API_TAX + 'edit-tax-by-tax', data);
  }

  deleteTax(id: string) {
    return this.httpClient.delete<{message?: string}>(API_TAX + 'delete-tax-by-id/' + id);
  }
}
