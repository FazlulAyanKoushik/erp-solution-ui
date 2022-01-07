import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Bank} from '../interfaces/bank';

const API_BANK = environment.apiBaseLink + '/api/bank/';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Bank
   */
  addBank(data: Bank) {
    return this.httpClient.post<{message: string}>(API_BANK + 'add-bank', data);
  }

  getAllBanks() {
    return this.httpClient.get<{data: Bank[], message?: string}>(API_BANK + 'get-all-banks');
  }

  getBankByBankID(id: string) {
    return this.httpClient.get<{data: Bank, message?: string}>(API_BANK + 'get-bank-by-bank-id/' + id);
  }

  getSingleBankBySlug(slug: string) {
    return this.httpClient.get<{ data: Bank, message: string }>(API_BANK + 'get-single-bank-by-slug/' + slug);
  }

  editBankData(data: Bank) {
    return this.httpClient.put<{message?: string}>(API_BANK + 'edit-bank-by-bank', data);
  }

  deleteBank(id: string) {
    return this.httpClient.delete<{message?: string}>(API_BANK + 'delete-bank-by-id/' + id);
  }
}
