import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Payable} from '../interfaces/payable';

const API_PAYABLE = environment.apiBaseLink + '/api/payable/';


@Injectable({
  providedIn: 'root'
})
export class PayableService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Payable
   */
  addPayable(data: Payable) {
    return this.httpClient.post<{message: string}>(API_PAYABLE + 'add-payable', data);
  }

  getAllPayables() {
    return this.httpClient.get<{data: Payable[], message?: string}>(API_PAYABLE + 'get-all-payables');
  }

  getPayableByPayableID(id: string) {
    return this.httpClient.get<{data: Payable, message?: string}>(API_PAYABLE + 'get-payable-by-payable-id/' + id);
  }

  getSinglePayableBySlug(slug: string) {
    return this.httpClient.get<{ data: Payable, message: string }>(API_PAYABLE + 'get-single-payable-by-slug/' + slug);
  }

  editPayableData(data: Payable) {
    return this.httpClient.put<{message?: string}>(API_PAYABLE + 'edit-payable-by-payable', data);
  }

  deletePayable(id: string) {
    return this.httpClient.delete<{message?: string}>(API_PAYABLE + 'delete-payable-by-id/' + id);
  }
}
