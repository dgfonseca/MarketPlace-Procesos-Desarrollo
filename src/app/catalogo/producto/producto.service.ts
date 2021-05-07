import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "./producto";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(globals.API_IP + globals.PRODUCTO + id)
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(globals.API_IP + globals.PRODUCTO)
  }

  createProducto(producto: Producto) {
    return this.http.post<Producto>(globals.API_IP + globals.PRODUCTO, producto)
  }

  updateProducto(id: number, producto: Producto) {
    return this.http.put<Producto>(globals.API_IP + globals.PRODUCTO + id, producto)
  }

  deleteProducto(id: number) {
    return this.http.delete<Producto>(globals.API_IP + globals.PRODUCTO + id)
  }
}
