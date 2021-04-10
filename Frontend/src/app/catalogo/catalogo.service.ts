import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as globals from "../globals";
import {CantidadProducto} from "./cantidad-producto";
import {CantidadProductoCatalogo} from "./cantidad-producto-catalogo";

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) {
  }

  getCantidadProducto(id: number): Observable<CantidadProducto> {
    return this.http.get<CantidadProducto>(globals.API_IP + globals.CANTIDAD_PRODUCTO + id)
  }

  getCantidadesProducto(): Observable<CantidadProducto[]> {
    return this.http.get<CantidadProducto[]>(globals.API_IP + globals.CANTIDAD_PRODUCTO)
  }

  createCantidadProducto(cantidadProducto: CantidadProducto) {
    return this.http.post<CantidadProducto>(globals.API_IP + globals.CANTIDAD_PRODUCTO, cantidadProducto)
  }

  updateCantidadProducto(id: number, cantidadProducto: CantidadProducto) {
    return this.http.put<CantidadProducto>(globals.API_IP + globals.CANTIDAD_PRODUCTO + id, cantidadProducto)
  }

  deleteCantidadProducto(id: number) {
    return this.http.delete<CantidadProducto>(globals.API_IP + globals.CANTIDAD_PRODUCTO + id)
  }

  getCantidadProductoCatalogo(id: number): Observable<CantidadProductoCatalogo> {
    return this.http.get<CantidadProductoCatalogo>(globals.API_IP + globals.CANTIDAD_PRODUCTO_CATALOGO + id + "/")
  }

  getCantidadesProductoCatalogo(): Observable<CantidadProductoCatalogo[]> {
    return this.http.get<CantidadProductoCatalogo[]>(globals.API_IP + globals.CANTIDAD_PRODUCTO_CATALOGO)
  }

  createCantidadProductoCatalogo(cantidadProductoCatalogo: CantidadProductoCatalogo) {
    return this.http.post<CantidadProductoCatalogo>(globals.API_IP + globals.CANTIDAD_PRODUCTO_CATALOGO, cantidadProductoCatalogo)
  }

  updateCantidadProductoCatalogo(id: number, cantidadProductoCatalogo: CantidadProductoCatalogo) {
    return this.http.put<CantidadProductoCatalogo>(globals.API_IP + globals.CANTIDAD_PRODUCTO_CATALOGO + id + "/", cantidadProductoCatalogo)
  }

  deleteCantidadProductoCatalogo(id: number) {
    return this.http.delete<CantidadProductoCatalogo>(globals.API_IP + globals.CANTIDAD_PRODUCTO_CATALOGO + id + "/")
  }
}
