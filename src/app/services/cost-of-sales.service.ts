import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CostOfSales} from '../interfaces/cost-of-sales';

const API_COST_OF_SALES = environment.apiBaseLink + '/api/cost-of-sales/';


@Injectable({
  providedIn: 'root'
})
export class CostOfSalesService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * CostOfSales
   */
  addCostOfSales(data: CostOfSales) {
    return this.httpClient.post<{message: string}>(API_COST_OF_SALES + 'add-cost-of-sales', data);
  }

  getAllCostOfSaless() {
    return this.httpClient.get<{data: CostOfSales[], message?: string}>(API_COST_OF_SALES + 'get-all-cost-of-saless');
  }

  getCostOfSalesByCostOfSalesID(id: string) {
    return this.httpClient.get<{data: CostOfSales, message?: string}>(API_COST_OF_SALES + 'get-cost-of-sales-by-cost-of-sales-id/' + id);
  }

  getSingleCostOfSalesBySlug(slug: string) {
    return this.httpClient.get<{ data: CostOfSales, message: string }>(API_COST_OF_SALES + 'get-single-cost-of-sales-by-slug/' + slug);
  }

  editCostOfSalesData(data: CostOfSales) {
    return this.httpClient.put<{message?: string}>(API_COST_OF_SALES + 'edit-cost-of-sales-by-cost-of-sales', data);
  }

  deleteCostOfSales(id: string) {
    return this.httpClient.delete<{message?: string}>(API_COST_OF_SALES + 'delete-cost-of-sales-by-id/' + id);
  }
}
