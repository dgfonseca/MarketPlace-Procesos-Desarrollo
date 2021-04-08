import { Component, OnInit } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-canasta-create',
  templateUrl: './canasta-create.component.html',
  styleUrls: ['./canasta-create.component.css']
})
export class CanastaCreateComponent implements OnInit {

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
