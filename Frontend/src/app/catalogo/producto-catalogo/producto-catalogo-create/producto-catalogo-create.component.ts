import {Component, OnInit} from '@angular/core';
import {ProductoCatalogoService} from "../producto-catalogo.service";
import {ProductoCatalogo} from "../producto-catalogo";

@Component({
  selector: 'app-producto-catalogo-create',
  templateUrl: './producto-catalogo-create.component.html',
  styleUrls: ['./producto-catalogo-create.component.css']
})
export class ProductoCatalogoCreateComponent implements OnInit {
  productoCatalogoService: ProductoCatalogoService;

  constructor(productoCatalogoService: ProductoCatalogoService) {
    this.productoCatalogoService = productoCatalogoService;
  }

  create() {
    const productoCatalogo = new ProductoCatalogo();
    productoCatalogo.nombre = (<HTMLInputElement>document.getElementsByName("nombre")[0]).value;
    productoCatalogo.fotoProducto = (<HTMLInputElement>document.getElementsByName("fotoProducto")[0]).value;
    productoCatalogo.unidad = (<HTMLInputElement>document.getElementsByName("unidad")[0]).value;
    productoCatalogo.precioPorUnidad = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[0]).value);
    productoCatalogo.activado = true;
    this.productoCatalogoService.createProductoCatalogo(productoCatalogo).subscribe();
    window.history.back();
  }

  ngOnInit(): void {
    let button = document.getElementById("cancelar");
    if (button != null) {
      button.addEventListener("click", () => window.history.back());
    }
    button = document.getElementById("crear")
    if (button != null) {
      button.addEventListener("click", () => this.create());
    }

  }
}
