import {Oferta} from "./oferta/oferta";
import {PedidoProductor} from "./pedido/pedido-productor/pedido-productor";
import {Producto} from "./producto/producto";

export class CantidadProducto {
  id: number;
  cantidad: number;
  ofertaProductor: Oferta;
  pedidoProductor: PedidoProductor
  producto: Producto;
}
