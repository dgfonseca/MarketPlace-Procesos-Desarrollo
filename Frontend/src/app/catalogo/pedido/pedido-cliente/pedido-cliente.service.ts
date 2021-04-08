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
    return this.http.get<PedidoCliente>(API_IP + PEDIDO_USUARIO + id)
  }

  getPedidosCliente(): Observable<PedidoCliente[]> {
    return this.http.get<PedidoCliente[]>(API_IP + PEDIDO_USUARIO)
  }

  createPedidoCliente(pedidoUsuario: PedidoCliente) {
    return this.http.post<PedidoCliente>(API_IP + PEDIDO_USUARIO, pedidoUsuario)
  }

  updatePedidoCliente(id: number, pedidoUsuario: PedidoCliente) {
    return this.http.put<PedidoCliente>(API_IP + PEDIDO_USUARIO + id, pedidoUsuario)
  }

  deletePedidoCliente(id: number) {
    return this.http.delete<PedidoCliente>(API_IP + PEDIDO_USUARIO + id)
  }
}
