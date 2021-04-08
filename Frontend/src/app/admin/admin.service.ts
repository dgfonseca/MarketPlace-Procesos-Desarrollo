import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Canasta} from "../catalogo/canasta/canasta";
import {Usuario} from "../usuario/cliente/usuario";
import {OfertaProductor} from "../catalogo/oferta/oferta-productor";
import {PedidoCliente} from "../catalogo/pedido/pedido-cliente/pedido-cliente";
import {PedidoProductor} from "../catalogo/pedido/pedido-productor/pedido-productor";
import {ProductoCatalogo} from "../catalogo/producto-catalogo/producto-catalogo";
import {Producto} from "../catalogo/producto/producto";
import {Productor} from "../usuario/productor/productor";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getCanastas(): Observable<Canasta[]> {
    return this.http.get<Canasta[]>(API_IP + ADMINISTRADOR)
  }

  getClientes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_IP + ADMINISTRADOR)
  }

  getOfertas(): Observable<OfertaProductor[]> {
    return this.http.get<OfertaProductor[]>(API_IP + ADMINISTRADOR)
  }

  getPedidosClientes(): Observable<PedidoCliente[]> {
    return this.http.get<PedidoCliente[]>(API_IP + ADMINISTRADOR)
  }

  getPedidosProductores(): Observable<PedidoProductor[]> {
    return this.http.get<PedidoProductor[]>(API_IP + ADMINISTRADOR)
  }

  getProductosCatalogo(): Observable<ProductoCatalogo[]> {
    return this.http.get<ProductoCatalogo[]>(API_IP + ADMINISTRADOR)
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_IP + ADMINISTRADOR)
  }

  getProductores(): Observable<Productor[]> {
    return this.http.get<Productor[]>(API_IP + ADMINISTRADOR)
  }
}
