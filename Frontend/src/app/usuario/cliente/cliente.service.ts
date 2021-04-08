import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "./usuario";
import {PedidoCliente} from "../../catalogo/pedido/pedido-cliente/pedido-cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  getCliente(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(API_IP + USUARIO + id)
  }

  getClientes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_IP + USUARIO)
  }

  createCliente(usuario: Usuario) {
    return this.http.post<Usuario>(API_IP + USUARIO, usuario)
  }

  updateCliente(id: number, usuario: Usuario) {
    return this.http.put<Usuario>(API_IP + USUARIO + id, usuario)
  }

  deleteCliente(id: number) {
    return this.http.delete<Usuario>(API_IP + USUARIO + id)
  }

  getPedidosCliente(id: number): Observable<PedidoCliente[]> {
    return this.http.get<PedidoCliente[]>(API_IP + USUARIO + id + "/pedidos")
  }
}
