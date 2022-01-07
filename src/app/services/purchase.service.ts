import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Purchase} from '../interfaces/purchase';

const API_PURCHASE = environment.apiBaseLink + '/api/purchase/';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Purchase
   */
  addPurchase(data: Purchase) {
    return this.httpClient.post<{message: string}>(API_PURCHASE + 'add-purchase', data);
  }

  getAllPurchases() {
    return this.httpClient.get<{data: Purchase[], message?: string}>(API_PURCHASE + 'get-all-purchases');
  }

  getPurchaseByPurchaseID(id: string) {
    return this.httpClient.get<{data: Purchase, message?: string}>(API_PURCHASE + 'get-purchase-by-purchase-id/' + id);
  }

  getSinglePurchaseBySlug(slug: string) {
    return this.httpClient.get<{ data: Purchase, message: string }>(API_PURCHASE + 'get-single-purchase-by-slug/' + slug);
  }

  editPurchaseData(data: Purchase) {
    return this.httpClient.put<{message?: string}>(API_PURCHASE + 'edit-purchase-by-purchase', data);
  }

  deletePurchase(id: string) {
    return this.httpClient.delete<{message?: string}>(API_PURCHASE + 'delete-purchase-by-id/' + id);
  }
}
