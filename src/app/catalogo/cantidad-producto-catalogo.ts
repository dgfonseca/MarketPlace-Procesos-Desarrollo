import {ProductoCatalogo} from "./producto-catalogo/producto-catalogo";
import {Canasta} from "./canasta/canasta";
import {PedidoCliente} from "./pedido/pedido-cliente/pedido-cliente";

export class CantidadProductoCatalogo {
  id: number;
  cantidad: number;
  productoCatalogo: any;
  canasta: any;
  pedidoUsuario: any;
}
