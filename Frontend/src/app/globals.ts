import {Producto} from "./catalogo/producto/producto";
import {ProductoCatalogo} from "./catalogo/producto-catalogo/producto-catalogo";
import {Oferta} from "./catalogo/oferta/oferta";
import {CantidadProducto} from "./catalogo/cantidad-producto";

export const API_IP = "http://localhost:8080/api/";
export const CLIENTE = "cliente";
export const PEDIDO_CLIENTE = "pedido-cliente";
export const CANTIDAD_PRODUCTO_CATALOGO = "cantidad-producto-catalogo";
export const PRODUCTO_CATALOGO = "producto-catalogo";
export const CANASTA = "canasta";
export const PRODUCTO = "producto";
export const CANTIDAD_PRODUCTO = "cantidad-producto";
export const OFERTA = "oferta";
export const PEDIDO_PRODUCTOR = "pedido-productor";
export const PRODUCTOR = "productor";
export var ofertaAPostular = new Oferta();

export function anadirAOferta(productoCatalogo: ProductoCatalogo) {
  if(ofertaAPostular.cantidadesProducto == null){
    ofertaAPostular.cantidadesProducto = [];
  }
  let producto = new Producto();
  producto.productoCatalogo = productoCatalogo;
  let indice = encontrarEnOfertaAPostular(productoCatalogo)
  if(indice === -1){
    let cantidaProducto = new CantidadProducto();
    cantidaProducto.cantidad = 1;
    cantidaProducto.producto = producto;
    ofertaAPostular.cantidadesProducto.push();
  }
  else {
    ofertaAPostular.cantidadesProducto[indice].cantidad++;
  }
}

function encontrarEnOfertaAPostular(productoCatalogo: ProductoCatalogo) : number{
  let size = ofertaAPostular.cantidadesProducto.length;
  for(let i = 0;i<size; i++){
    if(ofertaAPostular.cantidadesProducto[i].producto.productoCatalogo.id === productoCatalogo.id){
      return i;
    }
  }
  return -1;
}
export var carritoCompras: ProductoCatalogo[];
export function encontrarEnCarritoCompras(productoCatalogo: ProductoCatalogo) : number{
  let size = carritoCompras.length;
  for(let i = 0;i<size; i++){
    if(carritoCompras[i].id === productoCatalogo.id){
      return i;
    }
  }
  return -1;
}
