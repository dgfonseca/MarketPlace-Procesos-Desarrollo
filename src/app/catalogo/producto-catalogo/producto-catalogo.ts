import {Producto} from "../producto/producto";
import {CantidadProductoCatalogo} from "../cantidad-producto-catalogo";

export class ProductoCatalogo {
  id: number;
  nombre: string;
  precioPorUnidad: number;
  fotoProducto: string;
  unidad: string;
  activado: boolean;
  cantidadProductoCatalogo: any;
  productos: Producto[];
}
