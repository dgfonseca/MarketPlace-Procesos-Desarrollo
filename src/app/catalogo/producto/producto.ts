import {CantidadProducto} from "../cantidad-producto";
import {ProductoCatalogo} from "../producto-catalogo/producto-catalogo";

export class Producto {
  id: number;
  precioPorUnidad: number;
  cantidadDisponible: number;
  cantidadProducto: any;
  productoCatalogo: any;
}
