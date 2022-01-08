import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PaymentMethod} from '../interfaces/payment-method';

const API_EQUIPMENT = environment.apiBaseLink + '/api/payment-method/';


@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * PaymentMethod
   */
  addPaymentMethod(data: PaymentMethod) {
    return this.httpClient.post<{message: string}>(API_EQUIPMENT + 'add-payment-method', data);
  }

  getAllPaymentMethods() {
    return this.httpClient.get<{data: PaymentMethod[], message?: string}>(API_EQUIPMENT + 'get-all-payment-methods');
  }

  getPaymentMethodByPaymentMethodID(id: string) {
    return this.httpClient.get<{data: PaymentMethod, message?: string}>(API_EQUIPMENT + 'get-payment-method-by-payment-method-id/' + id);
  }

  getSinglePaymentMethodBySlug(slug: string) {
    return this.httpClient.get<{ data: PaymentMethod, message: string }>(API_EQUIPMENT + 'get-single-payment-method-by-slug/' + slug);
  }

  editPaymentMethodData(data: PaymentMethod) {
    return this.httpClient.put<{message?: string}>(API_EQUIPMENT + 'edit-payment-method-by-payment-method', data);
  }

  deletePaymentMethod(id: string) {
    return this.httpClient.delete<{message?: string}>(API_EQUIPMENT + 'delete-payment-method-by-id/' + id);
  }
}
