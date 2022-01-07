import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MobileBank} from '../interfaces/mobile-bank';

const API_MOBILE_BANK = environment.apiBaseLink + '/api/mobile-bank/';


@Injectable({
  providedIn: 'root'
})
export class MobileBankService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * MobileBank
   */
  addMobileBank(data: MobileBank) {
    return this.httpClient.post<{message: string}>(API_MOBILE_BANK + 'add-mobile-bank', data);
  }

  getAllMobileBanks() {
    return this.httpClient.get<{data: MobileBank[], message?: string}>(API_MOBILE_BANK + 'get-all-mobile-banks');
  }

  getMobileBankByMobileBankID(id: string) {
    return this.httpClient.get<{data: MobileBank, message?: string}>(API_MOBILE_BANK + 'get-mobile-bank-by-mobile-bank-id/' + id);
  }

  getSingleMobileBankBySlug(slug: string) {
    return this.httpClient.get<{ data: MobileBank, message: string }>(API_MOBILE_BANK + 'get-single-mobile-bank-by-slug/' + slug);
  }

  editMobileBankData(data: MobileBank) {
    return this.httpClient.put<{message?: string}>(API_MOBILE_BANK + 'edit-mobile-bank-by-mobile-bank', data);
  }

  deleteMobileBank(id: string) {
    return this.httpClient.delete<{message?: string}>(API_MOBILE_BANK + 'delete-mobile-bank-by-id/' + id);
  }
}
