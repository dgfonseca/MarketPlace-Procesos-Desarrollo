import {Oferta} from "../../oferta/oferta";
import {CantidadProducto} from "../../cantidad-producto";
import {Producto} from "../../producto/producto";

export class PedidoProductor {
  id: number;
  costoTotal: number;
  ofertaProductor: any;
  producto: any;
  cantidadesProducto: CantidadProducto[];
}
