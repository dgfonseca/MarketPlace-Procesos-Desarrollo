import {OfertaProductor} from "../../oferta/oferta-productor";
import {CantidadProducto} from "../../cantidad-producto";
import {Producto} from "../../producto/producto";

export class PedidoProductor {
  costoTotal: number;
  ofertaProductor: OfertaProductor;
  producto:Producto;
  cantidadesProducto: CantidadProducto[];
}
