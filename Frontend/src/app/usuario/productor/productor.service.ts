import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Productor} from "./productor";
import {PedidoProductor} from "../../catalogo/pedido/pedido-productor/pedido-productor";
import {Oferta} from "../../catalogo/oferta/oferta";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class ProductorService {

  constructor(private http: HttpClient) {
  }

  getProductor(id: number): Observable<Productor> {
    return this.http.get<Productor>(globals.API_IP + globals.PRODUCTOR + id)
  }

  getProductores(): Observable<Productor[]> {
    return this.http.get<Productor[]>(globals.API_IP + globals.PRODUCTOR)
  }

  createProductor(productor: Productor) {
    return this.http.post<Productor>(globals.API_IP + globals.PRODUCTOR, productor)
  }

  updateProductor(id: number, productor: Productor) {
    return this.http.put<Productor>(globals.API_IP + globals.PRODUCTOR + id, productor)
  }

  deleteProductor(id: number) {
    return this.http.delete<Productor>(globals.API_IP + globals.PRODUCTOR + id)
  }

  getPedidosProductor(id: number): Observable<PedidoProductor[]> {
    return this.http.get<PedidoProductor[]>(globals.API_IP + globals.PRODUCTOR + id + "/pedidos")
  }

  getOfertasProductor(id: number): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(globals.API_IP + globals.PRODUCTOR + id + "/ofertas")
  }
}
