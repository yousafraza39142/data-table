import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) {}


  /**
   * Get data from json file
   */
  getWareHouses(): Observable<any[]> {
    return this.http.get<any[]>('assets/warehouses.json');
  }

  /**
   * Get data from json file
   */
  getToolsData(): Observable<any[]> {
    return this.http.get<any[]>('assets/tools.json');
  }

  /**
   * Get data from json file
   */
  getProductQuantity(): Observable<any[]> {
    return this.http.get<any[]>('assets/productQuantity.json');
  }
}
