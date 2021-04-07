import { Component, OnInit } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
