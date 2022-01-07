import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AssetInventory} from '../interfaces/asset-inventory';

const API_ASSET_INVENTORY = environment.apiBaseLink + '/api/asset-inventory/';


@Injectable({
  providedIn: 'root'
})
export class AssetInventoryService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * AssetInventory
   */
  addAssetInventory(data: AssetInventory) {
    return this.httpClient.post<{message: string}>(API_ASSET_INVENTORY + 'add-asset-inventory', data);
  }

  getAllAssetInventorys() {
    return this.httpClient.get<{data: AssetInventory[], message?: string}>(API_ASSET_INVENTORY + 'get-all-asset-inventorys');
  }

  getAssetInventoryByAssetInventoryID(id: string) {
    return this.httpClient.get<{data: AssetInventory, message?: string}>(API_ASSET_INVENTORY + 'get-asset-inventory-by-asset-inventory-id/' + id);
  }

  getSingleAssetInventoryBySlug(slug: string) {
    return this.httpClient.get<{ data: AssetInventory, message: string }>(API_ASSET_INVENTORY + 'get-single-asset-inventory-by-slug/' + slug);
  }

  editAssetInventoryData(data: AssetInventory) {
    return this.httpClient.put<{message?: string}>(API_ASSET_INVENTORY + 'edit-asset-inventory-by-asset-inventory', data);
  }

  deleteAssetInventory(id: string) {
    return this.httpClient.delete<{message?: string}>(API_ASSET_INVENTORY + 'delete-asset-inventory-by-id/' + id);
  }
}
