import {Productor} from "../../usuario/productor/productor";
import {CantidadProducto} from "../cantidad-producto";
import {PedidoProductor} from "../pedido/pedido-productor/pedido-productor";

export class Oferta {
  fechaInicio: Date;
  fechaFin: Date;
  productor: Productor;
  cantidadesProducto: CantidadProducto[];
  pedidosProductores: PedidoProductor[];
}
