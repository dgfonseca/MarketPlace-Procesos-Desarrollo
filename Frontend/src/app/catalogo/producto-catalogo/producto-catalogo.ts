import {Producto} from "../producto/producto";
import {CantidadProductoCatalogo} from "../cantidad-producto-catalogo";

export class ProductoCatalogo {
  nombre: string;
  precioPorUnidad: number;
  cantidad: number;
  fotoProducto: string;
  unidad: string;
  activado: boolean;
  cantidadProductoCatalogo: CantidadProductoCatalogo;
  productos: Producto[];
}
