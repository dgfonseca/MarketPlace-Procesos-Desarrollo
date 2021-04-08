import {PedidoCliente} from "../../catalogo/pedido/pedido-cliente/pedido-cliente";

export class Usuario {
  nombre: string;
  correo: string;
  constrsena: string;
  pedidosUsuario: PedidoCliente[];
}
