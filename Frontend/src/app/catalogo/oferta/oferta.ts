import {Productor} from "../../usuario/productor/productor";
import {CantidadProducto} from "../cantidad-producto";
import {PedidoProductor} from "../pedido/pedido-productor/pedido-productor";

export class Oferta {
  id: number;
  fechaInicio: Date;
  fechaFin: Date;
  productor: any;
  cantidadesProducto: CantidadProducto[];
  pedidosProductores: PedidoProductor[];
}
