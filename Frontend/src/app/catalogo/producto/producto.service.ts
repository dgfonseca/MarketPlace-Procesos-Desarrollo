import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "./producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(API_IP + PRODUCTO + id)
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_IP + PRODUCTO)
  }

  createProducto(producto: Producto) {
    return this.http.post<Producto>(API_IP + PRODUCTO, producto)
  }

  updateProducto(id: number, producto: Producto) {
    return this.http.put<Producto>(API_IP + PRODUCTO + id, producto)
  }

  deleteProducto(id: number) {
    return this.http.delete<Producto>(API_IP + PRODUCTO + id)
  }
}
