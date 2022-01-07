import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Equipment} from '../interfaces/equipment';

const API_EQUIPMENT = environment.apiBaseLink + '/api/equipment/';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Equipment
   */
  addEquipment(data: Equipment) {
    return this.httpClient.post<{message: string}>(API_EQUIPMENT + 'add-equipment', data);
  }

  getAllEquipments() {
    return this.httpClient.get<{data: Equipment[], message?: string}>(API_EQUIPMENT + 'get-all-equipments');
  }

  getEquipmentByEquipmentID(id: string) {
    return this.httpClient.get<{data: Equipment, message?: string}>(API_EQUIPMENT + 'get-equipment-by-equipment-id/' + id);
  }

  getSingleEquipmentBySlug(slug: string) {
    return this.httpClient.get<{ data: Equipment, message: string }>(API_EQUIPMENT + 'get-single-equipment-by-slug/' + slug);
  }

  editEquipmentData(data: Equipment) {
    return this.httpClient.put<{message?: string}>(API_EQUIPMENT + 'edit-equipment-by-equipment', data);
  }

  deleteEquipment(id: string) {
    return this.httpClient.delete<{message?: string}>(API_EQUIPMENT + 'delete-equipment-by-id/' + id);
  }
}
