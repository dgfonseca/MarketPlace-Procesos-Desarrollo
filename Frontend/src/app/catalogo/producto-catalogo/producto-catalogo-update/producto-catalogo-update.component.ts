import {Component, OnInit} from '@angular/core';
import {ProductoCatalogoService} from "../producto-catalogo.service";
import {ProductoCatalogo} from "../producto-catalogo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-producto-catalogo-update',
  templateUrl: './producto-catalogo-update.component.html',
  styleUrls: ['./producto-catalogo-update.component.css']
})
export class ProductoCatalogoUpdateComponent implements OnInit {
  productoCatalogoService: ProductoCatalogoService;
  productoCatalogo: ProductoCatalogo;

  constructor(route: ActivatedRoute, productoCatalogoService: ProductoCatalogoService) {
    this.productoCatalogoService = productoCatalogoService;
    this.productoCatalogoService.getProductoCatalogo(route.snapshot.params['id']).subscribe((productoCatalogo) => {
      this.productoCatalogo = productoCatalogo;
      (<HTMLInputElement>document.getElementsByName("nombre")[0]).value = this.productoCatalogo.nombre;
      (<HTMLInputElement>document.getElementsByName("fotoProducto")[0]).value = this.productoCatalogo.fotoProducto;
      (<HTMLInputElement>document.getElementsByName("unidad")[0]).value = this.productoCatalogo.unidad;
      (<HTMLInputElement>document.getElementsByName("precio")[0]).value = String(this.productoCatalogo.precioPorUnidad);
    });
  }

  modificar() {
    this.productoCatalogo.nombre = (<HTMLInputElement>document.getElementsByName("nombre")[0]).value;
    this.productoCatalogo.fotoProducto = (<HTMLInputElement>document.getElementsByName("fotoProducto")[0]).value;
    this.productoCatalogo.unidad = (<HTMLInputElement>document.getElementsByName("unidad")[0]).value;
    this.productoCatalogo.precioPorUnidad = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[0]).value);
    this.productoCatalogoService.updateProductoCatalogo(this.productoCatalogo.id, this.productoCatalogo).subscribe();
    window.location.reload();
  }

  ngOnInit(): void {

    let button = document.getElementById("cancelar");
    if (button != null) {
      button.addEventListener("click", () => window.history.back());
    }
    button = document.getElementById("modificar")
    if (button != null) {
      button.addEventListener("click", () => this.modificar());
    }

  }
}
