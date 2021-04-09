import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductorService} from "../productor.service";
import {Productor} from "../productor";
import {ProductoService} from "../../../catalogo/producto/producto.service";
import {OfertaService} from "../../../catalogo/oferta/oferta.service";
import {CatalogoService} from "../../../catalogo/catalogo.service";
import {ProductoCatalogoService} from "../../../catalogo/producto-catalogo/producto-catalogo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productor-detail',
  templateUrl: './productor-detail.component.html',
  styleUrls: ['./productor-detail.component.css']
})
export class ProductorDetailComponent implements OnInit {

  faSearch = faSearch;
  productorService: ProductorService;
  ofertaService: OfertaService;
  catalogoService: CatalogoService;
  productoService: ProductoService;
  productoCatalogoService: ProductoCatalogoService;
  productor: Productor;
  route:ActivatedRoute

  constructor(route: ActivatedRoute,productorService: ProductorService, ofertaService: OfertaService, catalogoService: CatalogoService, productoService: ProductoService, productoCatalogoService: ProductoCatalogoService) {
    this.route = route;
    this.productorService = productorService;
    this.ofertaService = ofertaService;
    this.catalogoService = catalogoService;
    this.productoService = productoService;
    this.productoCatalogoService = productoCatalogoService;
  }

  ngOnInit(): void {
    this.productorService.getProductor(this.route.snapshot.params["id"]).subscribe(productor => this.productor = productor);

  }

}
