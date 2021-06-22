import { Injectable } from '@angular/core';
import { Brand } from './brand';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  apiURL: string = 'http://localhost:3010/api/';

  constructor(
    private http: HttpClient,
  ) { }

  getBrands() {
    return this.http.get<Brand[]>(`${this.apiURL}brands/`);
  }

  getBrandById(id: number) {
    return this.http.get<Brand>(`${this.apiURL}brands/${id}/`);
  }

  createBrand(brand: Brand) {
    return this.http.post<Brand>(`${this.apiURL}brands/`, brand);
  }

  updateBrand(brand: Brand) {
    return this.http.put<Brand>(`${this.apiURL}brands/${brand.id}/`, brand);
  }

  deleteBrand(id: number) {
    return this.http.delete(`${this.apiURL}brands/${id}/`);
  }
}
