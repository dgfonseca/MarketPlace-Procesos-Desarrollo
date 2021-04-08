import {Usuario} from "../../usuario/cliente/usuario";
import {CantidadProductoCatalogo} from "../cantidad-producto-catalogo";
import {PedidoProductor} from "./pedido-productor";

export class PedidoUsuario {
  costoTotal: number;
  fechaEntrega: Date;
  direccionEntrega: string;
  usuario: Usuario;
  cantidadesProductoCatalogo: CantidadProductoCatalogo[];
  pedidosProductor: PedidoProductor[];
}
