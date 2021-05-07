import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Productor} from "../../usuario/productor/productor";
import {ProductorService} from "../../usuario/productor/productor.service";

@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  faSearch = faSearch;
  productorService: ProductorService;
  productores: Productor[];

  constructor(productorService: ProductorService) {
    this.productorService = productorService;
  }

  ngOnInit(): void {
    this.productorService.getProductores().subscribe(productores => this.productores=productores);
  }

}
