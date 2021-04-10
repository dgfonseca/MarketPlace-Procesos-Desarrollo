import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {CatalogoService} from "../../catalogo.service";
import {OfertaService} from "../oferta.service";
import {Oferta} from "../oferta";
import {Canasta} from "../../canasta/canasta";
import {ProductoCatalogo} from "../../producto-catalogo/producto-catalogo";
import * as globals from "../../../globals";
import {ProductoService} from "../../producto/producto.service";
import {of} from "rxjs";
import {ProductoCatalogoService} from "../../producto-catalogo/producto-catalogo.service";

@Component({
  selector: 'app-oferta-create',
  templateUrl: './oferta-create.component.html',
  styleUrls: ['./oferta-create.component.css']
})
export class OfertaCreateComponent implements OnInit {

  faSearch = faSearch;
  ofertaService: OfertaService;
  catalogoService: CatalogoService;
  productoService: ProductoService;
  productoCatalogoService: ProductoCatalogoService
  oferta: Oferta;


  constructor(ofertaService: OfertaService, catalogoService: CatalogoService, productoService: ProductoService, productoCatalogoService: ProductoCatalogoService) {
    this.ofertaService = ofertaService;
    this.catalogoService = catalogoService;
    this.productoService = productoService;
    this.productoCatalogoService = productoCatalogoService;
  }

  eliminar(productoCatalogo: ProductoCatalogo) {
    let index = globals.encontrarEnOfertaAPostular(productoCatalogo, <Canasta>JSON.parse(<string>localStorage.getItem('ofertaAPostular')))
    if (index != -1) {
      this.oferta.cantidadesProducto.splice(index, 1)
    }
    localStorage.setItem('ofertaAPostular', JSON.stringify(this.oferta))
  }

  cambio(productoCatalogo: ProductoCatalogo, evento: any) {
    let index = globals.encontrarEnOfertaAPostular(productoCatalogo, <Canasta>JSON.parse(<string>localStorage.getItem('ofertaAPostular')))
    if (index != -1) {
      this.oferta.cantidadesProducto[index].cantidad = parseInt((evento.target as HTMLInputElement).value);
      localStorage.setItem('ofertaAPostular', JSON.stringify(this.oferta))
    }


  }

  cambioPrecio(productoCatalogo: ProductoCatalogo, evento: any) {
    let index = globals.encontrarEnOfertaAPostular(productoCatalogo, <Canasta>JSON.parse(<string>localStorage.getItem('ofertaAPostular')))
    if (index != -1) {
      this.oferta.cantidadesProducto[index].producto.precioPorUnidad = parseFloat((evento.target as HTMLInputElement).value);
      localStorage.setItem('ofertaAPostular', JSON.stringify(this.oferta))
    }


  }

  crear() {
    this.oferta.fechaInicio = new Date();
    this.oferta.fechaFin = new Date();
    let temporal = this.oferta;
    this.ofertaService.createOferta(this.oferta).subscribe(oferta => {
        let size = temporal.cantidadesProducto.length;
        console.log(document.getElementsByName("precio"))
        for (let i = 0; i < size; i++) {
          temporal.cantidadesProducto[i].producto.cantidadDisponible =
            parseInt((<HTMLInputElement>document.getElementsByName("cantidad")[i]).value);
          temporal.cantidadesProducto[i].producto.productoCatalogo =
            temporal.cantidadesProducto[i].producto.productoCatalogo.id;
          temporal.cantidadesProducto[i].producto.precioPorUnidad =
            parseFloat((<HTMLInputElement>document.getElementsByName("precio")[i]).value);
          console.log(temporal.cantidadesProducto[i].producto)
          temporal.cantidadesProducto[i].cantidad = temporal.cantidadesProducto[i].producto.cantidadDisponible;
          this.productoService.createProducto(temporal.cantidadesProducto[i].producto).subscribe(producto => {
            temporal.cantidadesProducto[i].producto = producto.id;
            temporal.cantidadesProducto[i].ofertaProductor = oferta.id;
            console.log(temporal.cantidadesProducto[i])
            this.catalogoService.createCantidadProducto(this.oferta.cantidadesProducto[i]).subscribe(respose => {
                console.log(respose)
                this.oferta = new Oferta();
                localStorage.removeItem('ofertaAPostular');
              }
            )


          })
        }
      }
    );


  }

  ngOnInit(): void {
    if (localStorage.getItem('ofertaAPostular') == null) {
      localStorage.setItem('ofertaAPostular', JSON.stringify(new Oferta()));
    }
    this.oferta = <Oferta>JSON.parse(<string>localStorage.getItem('ofertaAPostular'));
  }

}
