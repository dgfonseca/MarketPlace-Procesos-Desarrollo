import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductorService} from "../productor.service";
import {Productor} from "../productor";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productor-detail',
  templateUrl: './productor-detail.component.html',
  styleUrls: ['./productor-detail.component.css']
})
export class ProductorDetailComponent implements OnInit {

  faSearch = faSearch;
  productorService: ProductorService;
  productor: Productor;
  route:ActivatedRoute

  constructor(route: ActivatedRoute,productorService: ProductorService) {
    this.route = route;
    this.productorService = productorService;
  }

  ngOnInit(): void {
    this.productorService.getProductor(this.route.snapshot.params["id"]).subscribe(productor => this.productor = productor);
  }

}
