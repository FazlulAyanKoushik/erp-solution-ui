import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../interfaces/expense';

const API_EXPENSE = environment.apiBaseLink + '/api/expense/';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Expense
   */
  addExpense(data: Expense) {
    return this.httpClient.post<{message: string}>(API_EXPENSE + 'add-expense', data);
  }

  getAllExpenses() {
    return this.httpClient.get<{data: Expense[], message?: string}>(API_EXPENSE + 'get-all-expenses');
  }

  getExpenseByExpenseID(id: string) {
    return this.httpClient.get<{data: Expense, message?: string}>(API_EXPENSE + 'get-expense-by-expense-id/' + id);
  }

  getSingleExpenseBySlug(slug: string) {
    return this.httpClient.get<{ data: Expense, message: string }>(API_EXPENSE + 'get-single-expense-by-slug/' + slug);
  }

  editExpenseData(data: Expense) {
    return this.httpClient.put<{message?: string}>(API_EXPENSE + 'edit-expense-by-expense', data);
  }

  deleteExpense(id: string) {
    return this.httpClient.delete<{message?: string}>(API_EXPENSE + 'delete-expense-by-id/' + id);
  }
}
