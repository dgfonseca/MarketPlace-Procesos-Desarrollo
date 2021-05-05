import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductoCatalogoService} from "../../catalogo/producto-catalogo/producto-catalogo.service";
import {ProductoCatalogo} from "../../catalogo/producto-catalogo/producto-catalogo";
import {Estadisticas} from "../../catalogo/estadisticas";
import * as operators from 'rxjs/add/operator/catch';

@Component({
  selector: 'app-establecer-precio',
  templateUrl: './establecer-precio.component.html',
  styleUrls: ['./establecer-precio.component.css']
})
export class EstablecerPrecioComponent implements OnInit {

  productoCatalogoService: ProductoCatalogoService;
  productoCatalogo: ProductoCatalogo;
  estadisticas: Estadisticas;

  constructor(route: ActivatedRoute, productoCatalogoService: ProductoCatalogoService) {
    this.productoCatalogoService = productoCatalogoService;
    this.productoCatalogoService.getProductoCatalogo(route.snapshot.params['id']).subscribe((productoCatalogo) => {
      this.productoCatalogo = productoCatalogo;
      (<HTMLInputElement>document.getElementsByName("precio")[0]).value = String(this.productoCatalogo.precioPorUnidad);
      (<HTMLInputElement>document.getElementsByName("nombre")[0]).innerHTML = String(this.productoCatalogo.nombre);
    });
    this.productoCatalogoService.getProductInformation(route.snapshot.params['id']).subscribe((objeto) => {
      this.estadisticas = objeto;
      if (this.estadisticas.min != undefined) {
        (<HTMLInputElement>document.getElementsByName("min")[0]).innerHTML = "$ "+String(this.estadisticas.min)+" COP";
        (<HTMLInputElement>document.getElementsByName("max")[0]).innerHTML = "$ "+String(this.estadisticas.max)+" COP";
        (<HTMLInputElement>document.getElementsByName("avg")[0]).innerHTML = "$ "+String(Math.round(Number(this.estadisticas.avg)))+" COP";
      } else {
        (<HTMLInputElement>document.getElementsByName("min")[0]).innerHTML = "-";
        (<HTMLInputElement>document.getElementsByName("max")[0]).innerHTML = "-";
        (<HTMLInputElement>document.getElementsByName("avg")[0]).innerHTML = "-";
      }
    });
  }

  ngOnInit(): void {
    let button = document.getElementById("modificar")
    if (button != null) {
      button.addEventListener("click", () => this.establecerPrecio());
    }
  }

  establecerPrecio() {
    this.productoCatalogo.precioPorUnidad = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[0]).value);
    if (confirm("Está seguro que quiere modificar el producto del catalogo?")) {
      this.productoCatalogoService.updateProductoCatalogo(this.productoCatalogo.id, this.productoCatalogo).subscribe(resp => {
        console.log(resp.status)
        if (resp.status === 200) {
          alert("El precio del producto del catálogo fue actualizado exitosamente");
          window.location.href = "/admin/producto-catalogo/list";
        } else {
          alert("El precio del producto del catálogo no pudo ser actualizado");
        }
      }, error => {
        alert("El precio del producto del catálogo no pudo ser actualizado");
      });
      //
    }
  }

}
