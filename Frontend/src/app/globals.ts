import {Producto} from "./catalogo/producto/producto";
import {ProductoCatalogo} from "./catalogo/producto-catalogo/producto-catalogo";
import {Oferta} from "./catalogo/oferta/oferta";
import {CantidadProducto} from "./catalogo/cantidad-producto";
import {Canasta} from "./catalogo/canasta/canasta";
import {CantidadProductoCatalogo} from "./catalogo/cantidad-producto-catalogo";

export const API_IP = "http://localhost:4200/api/";
export const CLIENTE = "cliente/";
export const PEDIDO_CLIENTE = "pedido-cliente/";
export const CANTIDAD_PRODUCTO_CATALOGO = "cantidad-producto-catalogo/";
export const PRODUCTO_CATALOGO = "producto-catalogo/";
export const CANASTA = "canasta/";
export const PRODUCTO = "producto/";
export const CANTIDAD_PRODUCTO = "cantidad-producto/";
export const OFERTA = "oferta/";
export const PEDIDO_PRODUCTOR = "pedido-productor/";
export const PRODUCTOR = "productor/";

export var ofertaAPostular = new Oferta();
export function anadirAOferta(productoCatalogo: ProductoCatalogo) {
  if(ofertaAPostular.cantidadesProducto == null){
    ofertaAPostular.cantidadesProducto = [];
  }
  let producto = new Producto();
  producto.productoCatalogo = productoCatalogo;
  let indice = encontrarEnOfertaAPostular(productoCatalogo)
  if(indice === -1){
    let cantidadProducto = new CantidadProducto();
    cantidadProducto.cantidad = 1;
    cantidadProducto.producto = producto;
    ofertaAPostular.cantidadesProducto.push(cantidadProducto);
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

export var canastaAPostular = new Canasta();
export function anadirACanasta(productoCatalogo: ProductoCatalogo) {
  if(canastaAPostular.cantidades == null){
    canastaAPostular.cantidades = [];
  }
  let indice = encontrarEnCanastaAPostular(productoCatalogo)
  if(indice === -1){
    let cantidadProductoCatalogo = new CantidadProductoCatalogo();
    cantidadProductoCatalogo.cantidad = 1;
    cantidadProductoCatalogo.productoCatalogo = productoCatalogo;
    canastaAPostular.cantidades.push(cantidadProductoCatalogo);
  }
  else {
    canastaAPostular.cantidades[indice].cantidad++;
  }
}

function encontrarEnCanastaAPostular(productoCatalogo: ProductoCatalogo) : number{
  let size = canastaAPostular.cantidades.length;
  for(let i = 0;i<size; i++){
    if(canastaAPostular.cantidades[i].productoCatalogo.id === productoCatalogo.id){
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
