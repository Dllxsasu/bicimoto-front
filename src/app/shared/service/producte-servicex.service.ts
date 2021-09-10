import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Productex} from 'src/app/shared/models/productex'
@Injectable({
  providedIn: 'root'
})
export class ProducteServicexService {

  constructor(private http: HttpClient) { }
  getCarro() {
  
    return this.http.get<any>('assets/carrusel.json')
    .toPromise()
    .then(res => <Productex[]>res.data)
    .then(data => { return data; });
}
}
