import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {CanastaService} from "../../catalogo/canasta/canasta.service";
import {Canasta} from "../../catalogo/canasta/canasta";

@Component({
  selector: 'app-canasta-list',
  templateUrl: './canasta-list.component.html',
  styleUrls: ['./canasta-list.component.css']
})
export class CanastaListComponent implements OnInit {

  faSearch = faSearch;
  canastaService: CanastaService;
  canastas: Canasta[];

  constructor(canastaService: CanastaService) {
    this.canastaService = canastaService;
  }

  ngOnInit(): void {
    this.canastaService.getCanastas().subscribe(canastas => {
      this.canastas = canastas;
      this.canastas.sort(this.compare);
    });
  }

  compare(a: Canasta, b: Canasta) {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  }

  search(): void {
    // Declare variables
    let input, filter, box, a, i, txtValue;
    input = document.getElementById('search-bar');
    if (input != null) {
      filter = (<HTMLInputElement>input).value.toUpperCase();
      box = document.getElementsByClassName('element');
      console.log(box);
      for (i = 0; i < box.length; i++) {
        a = box[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          (<HTMLElement>box[i]).style.display = '';
        } else {
          (<HTMLElement>box[i]).style.display = 'none';
        }
      }
    }
  }

  cambiarActivado(id: number, canasta: Canasta, estado: boolean) {
    if (confirm("Está seguro que quiere desactivar esta canasta?")) {
      let actualizar = new Canasta();
      actualizar.activado = !estado;
      this.canastaService.updateCanasta(id, actualizar).subscribe(resp => {
        if (resp.status === 200) {
          alert("La canasta del catálogo fue actualizada exitosamente");
          canasta.activado = !estado;
        } else {
          alert("La canasta del catálogo no pudo ser actualizada");
        }
      }, error => {
        alert("La canasta del catálogo no pudo ser actualizado");
      });
    }
  }

}
