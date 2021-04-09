import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "./usuario";
import {PedidoCliente} from "../../catalogo/pedido/pedido-cliente/pedido-cliente";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  getCliente(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(globals.API_IP + globals.CLIENTE + id)
  }

  getClientes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(globals.API_IP + globals.CLIENTE)
  }

  createCliente(usuario: Usuario) {
    return this.http.post<Usuario>(globals.API_IP + globals.CLIENTE, usuario)
  }

  updateCliente(id: number, usuario: Usuario) {
    return this.http.put<Usuario>(globals.API_IP + globals.CLIENTE + id, usuario)
  }

  deleteCliente(id: number) {
    return this.http.delete<Usuario>(globals.API_IP + globals.CLIENTE + id)
  }

  getPedidosCliente(id: number): Observable<PedidoCliente[]> {
    return this.http.get<PedidoCliente[]>(globals.API_IP + globals.CLIENTE + id + "/pedidos")
  }
}
