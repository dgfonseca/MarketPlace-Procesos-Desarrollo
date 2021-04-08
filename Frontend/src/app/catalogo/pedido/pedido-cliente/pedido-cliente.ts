import {Usuario} from "../../../usuario/cliente/usuario";
import {CantidadProductoCatalogo} from "../../cantidad-producto-catalogo";
import {PedidoProductor} from "../pedido-productor/pedido-productor";

export class PedidoCliente {
  costoTotal: number;
  fechaEntrega: Date;
  direccionEntrega: string;
  usuario: Usuario;
  cantidadesProductoCatalogo: CantidadProductoCatalogo[];
  pedidosProductor: PedidoProductor[];
}
