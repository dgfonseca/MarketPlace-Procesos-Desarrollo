import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PedidoCliente} from "./pedido-cliente";

@Injectable({
  providedIn: 'root'
})
export class PedidoClienteService {

  constructor(private http: HttpClient) {
  }

  getPedidoCliente(id: number): Observable<PedidoCliente> {
    return this.http.get<PedidoCliente>(API_IP + PEDIDO_CLIENTE + id)
  }

  getPedidosCliente(): Observable<PedidoCliente[]> {
    return this.http.get<PedidoCliente[]>(API_IP + PEDIDO_CLIENTE)
  }

  createPedidoCliente(pedidoCliente: PedidoCliente) {
    return this.http.post<PedidoCliente>(API_IP + PEDIDO_CLIENTE, pedidoCliente)
  }

  updatePedidoCliente(id: number, pedidoCliente: PedidoCliente) {
    return this.http.put<PedidoCliente>(API_IP + PEDIDO_CLIENTE + id, pedidoCliente)
  }

  deletePedidoCliente(id: number) {
    return this.http.delete<PedidoCliente>(API_IP + PEDIDO_CLIENTE + id)
  }
}
