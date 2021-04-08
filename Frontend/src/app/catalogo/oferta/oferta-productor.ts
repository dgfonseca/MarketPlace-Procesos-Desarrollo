import {Productor} from "../../usuario/productor/productor";
import {CantidadProducto} from "../cantidad-producto";
import {PedidoProductor} from "../pedido/pedido-productor";

export class OfertaProductor {
  fechaInicio: Date;
  fechaFin: Date;
  productor: Productor;
  cantidadesProducto: CantidadProducto[];
  pedidosProductores: PedidoProductor[];
}
