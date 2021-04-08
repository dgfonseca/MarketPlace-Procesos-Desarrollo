import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PedidoProductor} from "./pedido-productor";

@Injectable({
  providedIn: 'root'
})
export class PedidoProductorService {

  constructor(private http: HttpClient) {
  }

  getPedidoProductor(id: number): Observable<PedidoProductor> {
    return this.http.get<PedidoProductor>(API_IP + PEDIDO_PRODUCTOR + id)
  }

  getPedidosProductor(): Observable<PedidoProductor[]> {
    return this.http.get<PedidoProductor[]>(API_IP + PEDIDO_PRODUCTOR)
  }

  createPedidoProductor(pedidoProductor: PedidoProductor) {
    return this.http.post<PedidoProductor>(API_IP + PEDIDO_PRODUCTOR, pedidoProductor)
  }

  updatePedidoProductor(id: number, pedidoProductor: PedidoProductor) {
    return this.http.put<PedidoProductor>(API_IP + PEDIDO_PRODUCTOR + id, pedidoProductor)
  }

  deletePedidoProductor(id: number) {
    return this.http.delete<PedidoProductor>(API_IP + PEDIDO_PRODUCTOR + id)
  }
}
