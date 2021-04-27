import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductoCatalogoService} from "../producto-catalogo.service";
import {ProductoCatalogo} from "../producto-catalogo";
import * as globals from '../../../globals';
import {Oferta} from "../../oferta/oferta";

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

  cambio(index: number) {
    let precio = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[index]).value);
    let cantidad = parseFloat((<HTMLInputElement>document.getElementsByName("cantidad")[index]).value);
    (<HTMLElement>document.getElementsByName("total")[index]).textContent = "$" + (precio * cantidad);
  }

  ngOnInit(): void {
    if (localStorage.getItem('ofertaAPostular') == null) {
      localStorage.setItem('ofertaAPostular', JSON.stringify(new Oferta()));
    }
    this.productoCatalogoService.getProductosCatalogo().subscribe(productosCatalogo => this.productosCatalogo = productosCatalogo);
  }

}
