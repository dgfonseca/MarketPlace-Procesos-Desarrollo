import {OfertaProductor} from "./oferta/oferta-productor";
import {PedidoProductor} from "./pedido/pedido-productor";
import {Producto} from "./producto/producto";

export class CantidadProducto {
  cantidad: number;
  ofertaProductor: OfertaProductor;
  pedidoProductor: PedidoProductor
  producto: Producto;
}
