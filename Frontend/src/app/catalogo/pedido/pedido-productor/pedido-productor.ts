import {Oferta} from "../../oferta/oferta";
import {CantidadProducto} from "../../cantidad-producto";
import {Producto} from "../../producto/producto";

export class PedidoProductor {
  costoTotal: number;
  ofertaProductor: Oferta;
  producto:Producto;
  cantidadesProducto: CantidadProducto[];
}
