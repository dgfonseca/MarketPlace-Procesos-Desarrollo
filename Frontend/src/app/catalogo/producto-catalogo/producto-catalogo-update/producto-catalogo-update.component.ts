import {Component, OnInit} from '@angular/core';
import {ProductoCatalogoService} from "../producto-catalogo.service";
import {ProductoCatalogo} from "../producto-catalogo";
import {ActivatedRoute} from "@angular/router";
import * as operators from 'rxjs/add/operator/catch';

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
      (<HTMLInputElement>document.getElementsByName("precio")[0]).innerHTML = String('$' + this.productoCatalogo.precioPorUnidad + '/' + this.productoCatalogo.unidad);
    });
  }

  modificar() {
    if (confirm("Está seguro que quiere modificar el producto del catalogo?")) {
      this.productoCatalogo.nombre = (<HTMLInputElement>document.getElementsByName("nombre")[0]).value;
      this.productoCatalogo.fotoProducto = (<HTMLInputElement>document.getElementsByName("fotoProducto")[0]).value;
      this.productoCatalogo.unidad = (<HTMLInputElement>document.getElementsByName("unidad")[0]).value;
      if (this.productoCatalogo.nombre && this.productoCatalogo.fotoProducto && this.productoCatalogo.unidad && this.productoCatalogo.precioPorUnidad) {
        this.productoCatalogoService.updateProductoCatalogo(this.productoCatalogo.id, this.productoCatalogo).subscribe(resp => {
          console.log(resp.status)
          if (resp.status === 200) {
            alert("El producto del catálogo fue actualizado exitosamente");
            window.location.href = "/admin/producto-catalogo/list";
          } else {
            alert("El producto del catálogo no pudo ser actualizado");
          }
        }, error => alert("El producto del catálogo no pudo ser actualizado"));
      }
    }
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
