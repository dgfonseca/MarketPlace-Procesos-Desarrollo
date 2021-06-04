import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductorPostulanteService} from "../productor-postulante.service";
import {ProductorPostulante} from "../productor-postulante";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productor-postulante-detail',
  templateUrl: './productor-postulante-detail.component.html',
  styleUrls: ['./productor-postulante-detail.component.css']
})
export class ProductorPostulanteDetailComponent implements OnInit {

  faSearch = faSearch;
  productorPostulanteService: ProductorPostulanteService;
  productorPostulante: ProductorPostulante;
  route:ActivatedRoute

  constructor(route: ActivatedRoute,productorPostulanteService: ProductorPostulanteService) {
    this.route = route;
    this.productorPostulanteService = productorPostulanteService;
  }

  ngOnInit(): void {
    this.productorPostulanteService.getProductorPostulante(this.route.snapshot.params["id"]).subscribe(productorPostulante => this.productorPostulante = productorPostulante);
  }

}
