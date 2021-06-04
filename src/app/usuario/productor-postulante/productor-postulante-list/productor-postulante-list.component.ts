import { Component, OnInit } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { ProductorPostulante } from '../productor-postulante';
import { ProductorPostulanteService } from '../productor-postulante.service';
import * as globals from '../../../globals';

@Component({
  selector: 'app-productor-postulante-list',
  templateUrl: './productor-postulante-list.component.html',
  styleUrls: ['./productor-postulante-list.component.css']
})
export class ProductorPostulanteListComponent implements OnInit {

  faSearch = faSearch;
  productorPostulanteService: ProductorPostulanteService
  productoresPostulante: ProductorPostulante[];

  constructor(productorPostulanteService: ProductorPostulanteService) {
    this.productorPostulanteService = productorPostulanteService    
  }

  compare(a: ProductorPostulante, b: ProductorPostulante) {
    if (a.nombreFinca < b.nombreFinca) {
        return -1;
    }
    if (a.nombreFinca > b.nombreFinca) {
        return 1;
    }
    return 0;
}

  ngOnInit(): void {
    this.productorPostulanteService.getProductoresPostulantes().subscribe(productoresPostulantes => {
        this.productoresPostulante = productoresPostulantes;
        this.productoresPostulante.sort(this.compare);
    });
}

}
