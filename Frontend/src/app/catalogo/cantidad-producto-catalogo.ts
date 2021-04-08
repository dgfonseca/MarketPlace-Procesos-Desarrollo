import {ProductoCatalogo} from "./producto-catalogo/producto-catalogo";
import {Canasta} from "./canasta/canasta";
import {PedidoUsuario} from "./pedido/pedido-usuario";

export class CantidadProductoCatalogo {
  cantidad: number;
  productoCatalogo: ProductoCatalogo;
  canasta: Canasta;
  pedidoUsuario: PedidoUsuario;
}
