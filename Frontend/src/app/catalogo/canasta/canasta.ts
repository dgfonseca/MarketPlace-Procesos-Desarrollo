import {CantidadProductoCatalogo} from "../cantidad-producto-catalogo";

export class Canasta {
  id: number;
  nombre: string;
  activado: boolean;
  cantidades: CantidadProductoCatalogo[];
}
