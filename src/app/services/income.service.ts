import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Income} from '../interfaces/income';

const API_INCOME = environment.apiBaseLink + '/api/income/';


@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Income
   */
  addIncome(data: Income) {
    return this.httpClient.post<{message: string}>(API_INCOME + 'add-income', data);
  }

  getAllIncomes() {
    return this.httpClient.get<{data: Income[], message?: string}>(API_INCOME + 'get-all-incomes');
  }

  getIncomeByIncomeID(id: string) {
    return this.httpClient.get<{data: Income, message?: string}>(API_INCOME + 'get-income-by-income-id/' + id);
  }

  getSingleIncomeBySlug(slug: string) {
    return this.httpClient.get<{ data: Income, message: string }>(API_INCOME + 'get-single-income-by-slug/' + slug);
  }

  editIncomeData(data: Income) {
    return this.httpClient.put<{message?: string}>(API_INCOME + 'edit-income-by-income', data);
  }

  deleteIncome(id: string) {
    return this.httpClient.delete<{message?: string}>(API_INCOME + 'delete-income-by-id/' + id);
  }
}
