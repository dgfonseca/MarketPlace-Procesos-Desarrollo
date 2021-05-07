import {Usuario} from "../../../usuario/cliente/usuario";
import {CantidadProductoCatalogo} from "../../cantidad-producto-catalogo";
import {PedidoProductor} from "../pedido-productor/pedido-productor";

export class PedidoCliente {
  id: number;
  costoTotal: number;
  fechaEntrega: Date;
  direccionEntrega: string;
  usuario: any;
  cantidadesProductoCatalogo: CantidadProductoCatalogo[];
  pedidosProductor: PedidoProductor[];
}
