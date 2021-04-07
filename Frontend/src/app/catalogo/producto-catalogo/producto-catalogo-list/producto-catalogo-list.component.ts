import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-producto-catalogo-list',
  templateUrl: './producto-catalogo-list.component.html',
  styleUrls: ['./producto-catalogo-list.component.css']
})
export class ProductoCatalogoListComponent implements OnInit {

  faSearch = faSearch;

  constructor() {
  }

  ngOnInit(): void {
  }

}
