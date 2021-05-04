import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductoCatalogoService} from "../../catalogo/producto-catalogo/producto-catalogo.service";
import {ProductoCatalogo} from "../../catalogo/producto-catalogo/producto-catalogo";
import {Estadisticas} from "../../catalogo/estadisticas";

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
      (<HTMLInputElement>document.getElementsByName("nombre")[0]).innerHTML = String(this.productoCatalogo.precioPorUnidad);
    });
    this.productoCatalogoService.getProductInformation(route.snapshot.params['id']).subscribe((objeto)=>{
      this.estadisticas = objeto;
      if(this.estadisticas.min!=undefined){
        (<HTMLInputElement>document.getElementsByName("min")[0]).innerHTML = String(this.estadisticas.min);
        (<HTMLInputElement>document.getElementsByName("max")[0]).innerHTML = String(this.estadisticas.max);
        (<HTMLInputElement>document.getElementsByName("avg")[0]).innerHTML = String(this.estadisticas.avg);
      }else{
        (<HTMLInputElement>document.getElementsByName("min")[0]).innerHTML = "-";
        (<HTMLInputElement>document.getElementsByName("max")[0]).innerHTML = "-";
        (<HTMLInputElement>document.getElementsByName("avg")[0]).innerHTML = "-";
      }
    });
  }

  ngOnInit(): void {
    let button = document.getElementById("cancelar");
    if (button != null) {
      button.addEventListener("click", () => window.history.back());
    }
    button = document.getElementById("modificar")
    if (button != null) {
      button.addEventListener("click", () => this.establecerPrecio());
    }
  }
  
  establecerPrecio() {
    this.productoCatalogo.precioPorUnidad = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[0]).value);
    this.productoCatalogoService.updateProductoCatalogo(this.productoCatalogo.id, this.productoCatalogo).subscribe();
    window.location.reload();
  }

}
