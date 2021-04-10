import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductorService} from "../productor.service";
import {OfertaService} from "../../../catalogo/oferta/oferta.service";
import {CatalogoService} from "../../../catalogo/catalogo.service";
import {ProductoService} from "../../../catalogo/producto/producto.service";
import {ProductoCatalogoService} from "../../../catalogo/producto-catalogo/producto-catalogo.service";
import {Productor} from "../productor";
import {ActivatedRoute} from "@angular/router";
import {Oferta} from "../../../catalogo/oferta/oferta";

@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  faSearch = faSearch;
  productorService: ProductorService;
  ofertaService: OfertaService;
  catalogoService: CatalogoService;
  productoService: ProductoService;
  productoCatalogoService: ProductoCatalogoService;
  productor: Productor;
  ofertas: Oferta[];
  route: ActivatedRoute

  constructor(route: ActivatedRoute, productorService: ProductorService, ofertaService: OfertaService, catalogoService: CatalogoService, productoService: ProductoService, productoCatalogoService: ProductoCatalogoService) {
    this.route = route;
    this.productorService = productorService;
    this.ofertaService = ofertaService;
    this.catalogoService = catalogoService;
    this.productoService = productoService;
    this.productoCatalogoService = productoCatalogoService;
  }

  ngOnInit(): void {
    this.productorService.getProductor(this.route.snapshot.params["id"]).subscribe(productor => this.productor = productor);
    this.ofertaService.getOfertasProductor(this.route.snapshot.params["id"]).subscribe(ofertas => {
      this.ofertas = ofertas;
    });

  }

}
