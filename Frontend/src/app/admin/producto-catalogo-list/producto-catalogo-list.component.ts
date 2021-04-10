import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductoCatalogoService} from "../../catalogo/producto-catalogo/producto-catalogo.service";
import {ProductoCatalogo} from "../../catalogo/producto-catalogo/producto-catalogo";

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

  eliminar(id:number) {
    this.productoCatalogoService.deleteProductoCatalogo(id).subscribe();
    window.location.reload();
  }

  cambiarActivado(id:number, productoCatalogo:ProductoCatalogo, estado:boolean) {
    productoCatalogo.activado = !estado;
    this.productoCatalogoService.updateProductoCatalogo(id, productoCatalogo);
  }

  ngOnInit(): void {
    this.productoCatalogoService.getProductosCatalogo().subscribe(productosCatalogo => this.productosCatalogo = productosCatalogo);
  }

}
