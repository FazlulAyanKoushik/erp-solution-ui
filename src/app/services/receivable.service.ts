import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Receivable} from '../interfaces/receivable';

const API_RECEIVABLE = environment.apiBaseLink + '/api/receivable/';


@Injectable({
  providedIn: 'root'
})
export class ReceivableService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Receivable
   */
  addReceivable(data: Receivable) {
    return this.httpClient.post<{message: string}>(API_RECEIVABLE + 'add-receivable', data);
  }

  getAllReceivables() {
    return this.httpClient.get<{data: Receivable[], message?: string}>(API_RECEIVABLE + 'get-all-receivables');
  }

  getReceivableByReceivableID(id: string) {
    return this.httpClient.get<{data: Receivable, message?: string}>(API_RECEIVABLE + 'get-receivable-by-receivable-id/' + id);
  }

  getSingleReceivableBySlug(slug: string) {
    return this.httpClient.get<{ data: Receivable, message: string }>(API_RECEIVABLE + 'get-single-receivable-by-slug/' + slug);
  }

  editReceivableData(data: Receivable) {
    return this.httpClient.put<{message?: string}>(API_RECEIVABLE + 'edit-receivable-by-receivable', data);
  }

  deleteReceivable(id: string) {
    return this.httpClient.delete<{message?: string}>(API_RECEIVABLE + 'delete-receivable-by-id/' + id);
  }
}
