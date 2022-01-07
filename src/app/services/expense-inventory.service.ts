import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ExpenseInventory} from '../interfaces/expense-inventory';

const API_EXPENSE_INVENTORY = environment.apiBaseLink + '/api/expense-inventory/';


@Injectable({
  providedIn: 'root'
})
export class ExpenseInventoryService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * ExpenseInventory
   */
  addExpenseInventory(data: ExpenseInventory) {
    return this.httpClient.post<{message: string}>(API_EXPENSE_INVENTORY + 'add-expense-inventory', data);
  }

  getAllExpenseInventorys() {
    return this.httpClient.get<{data: ExpenseInventory[], message?: string}>(API_EXPENSE_INVENTORY + 'get-all-expense-inventorys');
  }

  getExpenseInventoryByExpenseInventoryID(id: string) {
    return this.httpClient.get<{data: ExpenseInventory, message?: string}>(API_EXPENSE_INVENTORY + 'get-expense-inventory-by-expense-inventory-id/' + id);
  }

  getSingleExpenseInventoryBySlug(slug: string) {
    return this.httpClient.get<{ data: ExpenseInventory, message: string }>(API_EXPENSE_INVENTORY + 'get-single-expense-inventory-by-slug/' + slug);
  }

  editExpenseInventoryData(data: ExpenseInventory) {
    return this.httpClient.put<{message?: string}>(API_EXPENSE_INVENTORY + 'edit-expense-inventory-by-expense-inventory', data);
  }

  deleteExpenseInventory(id: string) {
    return this.httpClient.delete<{message?: string}>(API_EXPENSE_INVENTORY + 'delete-expense-inventory-by-id/' + id);
  }
}
