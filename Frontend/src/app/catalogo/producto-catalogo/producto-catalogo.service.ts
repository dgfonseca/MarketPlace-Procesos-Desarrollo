import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ProductoCatalogo} from "./producto-catalogo";
import {HttpClient} from "@angular/common/http";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class ProductoCatalogoService {

  constructor(private http: HttpClient) {
  }

  getProductoCatalogo(id: number): Observable<ProductoCatalogo> {
    return this.http.get<ProductoCatalogo>(globals.API_IP + globals.PRODUCTO_CATALOGO + id + "/")
  }

  getProductosCatalogo(): Observable<ProductoCatalogo[]> {
    return this.http.get<ProductoCatalogo[]>(globals.API_IP + globals.PRODUCTO_CATALOGO)
  }

  createProductoCatalogo(productoCatalogo: ProductoCatalogo) {
    return this.http.post<ProductoCatalogo>(globals.API_IP + globals.PRODUCTO_CATALOGO, productoCatalogo)
  }

  updateProductoCatalogo(id: number, productoCatalogo: ProductoCatalogo) {
    return this.http.put<ProductoCatalogo>(globals.API_IP + globals.PRODUCTO_CATALOGO + id + "/", productoCatalogo)
  }

  deleteProductoCatalogo(id: number) {
    return this.http.delete<ProductoCatalogo>(globals.API_IP + globals.PRODUCTO_CATALOGO + id + "/")
  }

}
