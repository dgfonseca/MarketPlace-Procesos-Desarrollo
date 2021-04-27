import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ProductoCatalogoService} from "../../catalogo/producto-catalogo/producto-catalogo.service";
import {ProductoCatalogo} from "../../catalogo/producto-catalogo/producto-catalogo";

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

    eliminar(id: number) {
        this.productoCatalogoService.deleteProductoCatalogo(id).subscribe();
        window.location.reload();
    }

    cambiarActivado(id: number, productoCatalogo: ProductoCatalogo, estado: boolean) {
        if (confirm("Está seguro que quiere desactivar este producto?")) {

            let actualizar = new ProductoCatalogo();
            actualizar.activado = !estado;
            this.productoCatalogoService.updateProductoCatalogo(id, actualizar).subscribe(resp => {
                if (resp.status === 200) {
                    alert("El producto del catálogo fue actualizado exitosamente");
                    productoCatalogo.activado = !estado;
                } else {
                    alert("El producto del catálogo no pudo ser actualizado");
                }
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

}
