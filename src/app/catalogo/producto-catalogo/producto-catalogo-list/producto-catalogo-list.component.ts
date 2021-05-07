import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductoCatalogoService} from "../producto-catalogo.service";
import {ProductoCatalogo} from "../producto-catalogo";
import * as globals from '../../../globals';
import {Oferta} from "../../oferta/oferta";
import {Producto} from "../../producto/producto";
import {CantidadProducto} from "../../cantidad-producto";

@Component({
  selector: 'app-producto-catalogo-list',
  templateUrl: './producto-catalogo-list.component.html',
  styleUrls: ['./producto-catalogo-list.component.css']
})
export class ProductoCatalogoListComponent implements OnInit {

  faSearch = faSearch;
  productoCatalogoService: ProductoCatalogoService;
  productosCatalogo: ProductoCatalogo[];

  constructor(productoCatalogoService: ProductoCatalogoService) {
    this.productoCatalogoService = productoCatalogoService;
  }

  anadir(productoCatalogo: ProductoCatalogo) {
    globals.anadirAOferta(productoCatalogo);
  }

  crear() {
    if(confirm("Está seguro que quiere crear esta oferta?")) {
      let size = this.productosCatalogo.length;
      let oferta = new Oferta();
      oferta.fechaInicio = new Date();
      oferta.fechaFin = new Date();
      oferta.fechaFin.setDate(oferta.fechaFin.getDate() + 7)
      oferta.cantidadesProducto = [];
      for (let i = 0; i < size; i++) {
        let cantidad = parseInt((<HTMLInputElement>document.getElementsByName("cantidad")[i]).value);
        if (cantidad) {
          if (cantidad > 0) {
            let precio = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[i]).value);
            if (precio) {
              if (precio > 0) {
                let producto = new Producto();
                producto.cantidadDisponible = cantidad;
                producto.precioPorUnidad = precio;
                producto.productoCatalogo = this.productosCatalogo[i].id;
                let cantidadProducto = new CantidadProducto();
                cantidadProducto.producto = producto;
                cantidadProducto.cantidad = cantidad;
                oferta.cantidadesProducto.push(cantidadProducto);
              } else {
                alert("El elemento " + this.productosCatalogo[i].nombre + " posee tiene un precio por unidad no valido, solo se pueden ingresar precios mayores a 0");
                return;
              }
            } else {
              alert("El elemento " + this.productosCatalogo[i].nombre + " posee tiene un precio por unidad no valido. Si se quiere ofertar una determinada cantidad del producto, este debe tener un precio para ser ofertado");
              return;
            }
          } else {
            alert("El elemento " + this.productosCatalogo[i].nombre + " posee tiene una cantidad no valida, solo se pueden ingresar cantidades mayores a 0");
            return;
          }
        }
      }
    }
  }

  cambio(index: number) {
    let precio = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[index]).value);
    let cantidad = parseInt((<HTMLInputElement>document.getElementsByName("cantidad")[index]).value);
    (<HTMLElement>document.getElementsByName("total")[index]).textContent = "$" + (precio * cantidad);
  }

  ngOnInit(): void {
    if (localStorage.getItem('ofertaAPostular') == null) {
      localStorage.setItem('ofertaAPostular', JSON.stringify(new Oferta()));
    }
    this.productoCatalogoService.getProductosCatalogo().subscribe(productosCatalogo => this.productosCatalogo = productosCatalogo);
  }

}
