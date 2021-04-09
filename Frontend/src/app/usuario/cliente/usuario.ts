import {PedidoCliente} from "../../catalogo/pedido/pedido-cliente/pedido-cliente";

export class Usuario {
  id: number;
  nombre: string;
  correo: string;
  constrsena: string;
  pedidosUsuario: PedidoCliente[];
}
