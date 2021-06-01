import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {ProductoCatalogoService} from '../../catalogo/producto-catalogo/producto-catalogo.service';
import {ProductoCatalogo} from '../../catalogo/producto-catalogo/producto-catalogo';

@Component({
  selector: 'app-producto-catalogo-list',
  templateUrl: './producto-catalogo-list.component.html',
  styleUrls: ['./producto-catalogo-list.component.css']
})
export class ProductoCatalogoListComponent implements OnInit {

  faSearch = faSearch;
  productoCatalogoService: ProductoCatalogoService;
  productosCatalogo: ProductoCatalogo[];

  constructor(productoCatalogoService: ProductoCatalogoService) {
    this.productoCatalogoService = productoCatalogoService;
  }

  eliminar(productoCatalogo: ProductoCatalogo) {
    if (confirm('Está seguro que quiere eliminar el producto del catalogo?')) {
      this.productoCatalogoService.deleteProductoCatalogo(productoCatalogo.id).subscribe(resp => {
        if (resp.status === 204) {
          alert('El producto del catálogo fue eliminado exitosamente');
          this.productoCatalogoService.deleteImage(productoCatalogo.nombre).subscribe();
          this.productoCatalogoService.getProductosCatalogo().subscribe(productosCatalogo => this.productosCatalogo = productosCatalogo);
        } else {
          alert('El producto del catálogo no pudo ser eliminado');
        }
      }, error => {
        alert(error.error.message);
      });
    }
  }

  cambiarActivado(id: number, productoCatalogo: ProductoCatalogo, estado: boolean) {
    if (confirm('Está seguro que quiere desactivar este producto?')) {

      let actualizar = new ProductoCatalogo();
      actualizar.activado = !estado;
      this.productoCatalogoService.updateProductoCatalogo(id, actualizar).subscribe(resp => {
        if (resp.status === 200) {
          alert('El producto del catálogo fue actualizado exitosamente');
          productoCatalogo.activado = !estado;
        } else {
          alert('El producto del catálogo no pudo ser actualizado');
        }
      }, error => {
        alert(error.error.message);
      });
    }
  }

  compare(a: ProductoCatalogo, b: ProductoCatalogo) {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  }

  ngOnInit(): void {
    this.productoCatalogoService.getProductosCatalogo().subscribe(productosCatalogo => {
      this.productosCatalogo = productosCatalogo;
      this.productosCatalogo.sort(this.compare);
    });
  }

  search(): void {
    // Declare variables
    let input, filter, box, a, i, txtValue;
    input = document.getElementById('search-bar');
    if (input != null) {
      filter = (<HTMLInputElement> input).value.toUpperCase();
      box = document.getElementsByClassName('element');
      console.log(box);
      for (i = 0; i < box.length; i++) {
        a = box[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          (<HTMLElement> box[i]).style.display = '';
        } else {
          (<HTMLElement> box[i]).style.display = 'none';
        }
      }
    }

  }

}
