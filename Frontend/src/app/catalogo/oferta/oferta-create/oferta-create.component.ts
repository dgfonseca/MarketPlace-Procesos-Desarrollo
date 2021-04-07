import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-oferta-create',
  templateUrl: './oferta-create.component.html',
  styleUrls: ['./oferta-create.component.css']
})
export class OfertaCreateComponent implements OnInit {

  faSearch = faSearch;

  constructor() {
  }

  ngOnInit(): void {
  }

}
