import {CantidadProducto} from "../cantidad-producto";
import {ProductoCatalogo} from "../producto-catalogo/producto-catalogo";

export class Producto {
  precioPorUnidad: number;
  cantidadDisponible: number;
  cantidadProducto: CantidadProducto;
  productoCatalogo: ProductoCatalogo;
}
