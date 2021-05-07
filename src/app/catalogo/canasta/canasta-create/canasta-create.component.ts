import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {CanastaService} from "../canasta.service";
import {CatalogoService} from "../../catalogo.service";
import {ProductoCatalogoService} from "../../producto-catalogo/producto-catalogo.service";
import {ProductoCatalogo} from "../../producto-catalogo/producto-catalogo";
import {Canasta} from "../canasta";
import * as globals from "../../../globals";
import {Oferta} from "../../oferta/oferta";

@Component({
  selector: 'app-canasta-create',
  templateUrl: './canasta-create.component.html',
  styleUrls: ['./canasta-create.component.css']
})
export class CanastaCreateComponent implements OnInit {
  canastaService: CanastaService;
  catalogoService: CatalogoService;
  productoCatalogoService: ProductoCatalogoService;
  productosCatalogo: ProductoCatalogo[];
  canastaAPostular: Canasta;

  faSearch = faSearch;

  constructor(canastaService: CanastaService, catalogoService: CatalogoService, productoCatalogoService: ProductoCatalogoService) {
    this.canastaService = canastaService;
    this.catalogoService = catalogoService;
    this.productoCatalogoService = productoCatalogoService;
  }

  agregar(productoCatalogo: ProductoCatalogo) {
    globals.anadirACanasta(productoCatalogo);
    this.canastaAPostular = <Canasta>JSON.parse(<string>localStorage.getItem('canastaAPostular'));
  }

  eliminar(productoCatalogo: ProductoCatalogo) {
    let index = globals.encontrarEnCanastaAPostular(productoCatalogo, <Canasta>JSON.parse(<string>localStorage.getItem('canastaAPostular')))
    if (index != -1) {
      this.canastaAPostular.cantidades.splice(index, 1)
    }
    localStorage.setItem('canastaAPostular', JSON.stringify(this.canastaAPostular))
  }

  crear() {
    let temp: Canasta;
    this.canastaAPostular.nombre = (<HTMLInputElement>document.getElementsByName("nombre")[0]).value + ""
    this.canastaService.createCanasta(this.canastaAPostular).subscribe(canasta => {
        temp = canasta;
        let size = this.canastaAPostular.cantidades.length;
        for (let i = 0; i < size; i++) {
          this.canastaAPostular.cantidades[i].canasta = temp.id;
          this.canastaAPostular.cantidades[i].productoCatalogo = this.canastaAPostular.cantidades[i].productoCatalogo.id;
          this.catalogoService.createCantidadProductoCatalogo(this.canastaAPostular.cantidades[i]).subscribe();

        }
      }
    );
    this.productosCatalogo = [];
    localStorage.removeItem('canastaAPostular');
  }

  ngOnInit(): void {
    if (localStorage.getItem('canastaAPostular') == null) {
      localStorage.setItem('canastaAPostular', JSON.stringify(new Oferta()));
    }
    this.productoCatalogoService.getProductosCatalogo().subscribe(productosCatalogo => this.productosCatalogo = productosCatalogo)
    this.canastaAPostular = <Canasta>JSON.parse(<string>localStorage.getItem('canastaAPostular'))
  }

}
