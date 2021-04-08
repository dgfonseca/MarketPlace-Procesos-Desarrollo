import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Productor} from "./productor";
import {PedidoProductor} from "../../catalogo/pedido/pedido-productor/pedido-productor";
import {Oferta} from "../../catalogo/oferta/oferta";

@Injectable({
  providedIn: 'root'
})
export class ProductorService {

  constructor(private http: HttpClient) {
  }

  getProductor(id: number): Observable<Productor> {
    return this.http.get<Productor>(API_IP + PRODUCTOR + id)
  }

  getProductores(): Observable<Productor[]> {
    return this.http.get<Productor[]>(API_IP + PRODUCTOR)
  }

  createProductor(productor: Productor) {
    return this.http.post<Productor>(API_IP + PRODUCTOR, productor)
  }

  updateProductor(id: number, productor: Productor) {
    return this.http.put<Productor>(API_IP + PRODUCTOR + id, productor)
  }

  deleteProductor(id: number) {
    return this.http.delete<Productor>(API_IP + PRODUCTOR + id)
  }

  getPedidosProductor(id: number): Observable<PedidoProductor[]> {
    return this.http.get<PedidoProductor[]>(API_IP + PRODUCTOR + id + "/pedidos")
  }

  getOfertasProductor(id: number): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(API_IP + PRODUCTOR + id + "/ofertas")
  }
}
