import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Canasta} from "../catalogo/canasta/canasta";
import {Usuario} from "../usuario/cliente/usuario";
import {Oferta} from "../catalogo/oferta/oferta";
import {PedidoCliente} from "../catalogo/pedido/pedido-cliente/pedido-cliente";
import {PedidoProductor} from "../catalogo/pedido/pedido-productor/pedido-productor";
import {ProductoCatalogo} from "../catalogo/producto-catalogo/producto-catalogo";
import {Producto} from "../catalogo/producto/producto";
import {Productor} from "../usuario/productor/productor";
import * as globals from "../globals";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getCanastas(): Observable<Canasta[]> {
    return this.http.get<Canasta[]>(globals.API_IP + globals.CANASTA)
  }

  getClientes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(globals.API_IP + globals.CLIENTE)
  }

  getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(globals.API_IP + globals.OFERTA)
  }

  getPedidosClientes(): Observable<PedidoCliente[]> {
    return this.http.get<PedidoCliente[]>(globals.API_IP + globals.PEDIDO_CLIENTE)
  }

  getPedidosProductores(): Observable<PedidoProductor[]> {
    return this.http.get<PedidoProductor[]>(globals.API_IP + globals.PEDIDO_PRODUCTOR)
  }

  getProductosCatalogo(): Observable<ProductoCatalogo[]> {
    return this.http.get<ProductoCatalogo[]>(globals.API_IP + globals.PRODUCTO_CATALOGO)
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(globals.API_IP + globals.PRODUCTO)
  }

  getProductores(): Observable<Productor[]> {
    return this.http.get<Productor[]>(globals.API_IP + globals.PRODUCTOR)
  }
}
