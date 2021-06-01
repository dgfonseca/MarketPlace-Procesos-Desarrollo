import {Component, OnInit} from '@angular/core';
import {ProductoCatalogoService} from "../producto-catalogo.service";
import {ProductoCatalogo} from "../producto-catalogo";
import * as operators from 'rxjs/add/operator/catch';
import * as globals from "../../../globals";

@Component({
  selector: 'app-producto-catalogo-create',
  templateUrl: './producto-catalogo-create.component.html',
  styleUrls: ['./producto-catalogo-create.component.css']
})
export class ProductoCatalogoCreateComponent implements OnInit {
  productoCatalogoService: ProductoCatalogoService;
  fileUpload: Boolean;

  constructor(productoCatalogoService: ProductoCatalogoService) {
    this.productoCatalogoService = productoCatalogoService;
  }

  create() {
    if (confirm("Está seguro que quiere modificar el producto del catalogo?")) {
      let file: File | null = null;
      let extension: String | null = null;
      const productoCatalogo = new ProductoCatalogo();
      productoCatalogo.nombre = (<HTMLInputElement>document.getElementsByName("nombre")[0]).value;
      if (this.fileUpload) {
        let fileElement = <HTMLInputElement>document.getElementById("file")
        if (fileElement.files != null) {
          file = fileElement.files[0];
          let split = file.name.split(".");
          extension = split[split.length - 1];
          productoCatalogo.fotoProducto = globals.IMAGE_API + "images/" + productoCatalogo.nombre + "." + extension;
        }
      } else {
        productoCatalogo.fotoProducto = (<HTMLInputElement>document.getElementById("url")).value;
      }
      productoCatalogo.unidad = (<HTMLInputElement>document.getElementsByName("unidad")[0]).value;
      productoCatalogo.precioPorUnidad = parseFloat((<HTMLInputElement>document.getElementsByName("precio")[0]).value);
      productoCatalogo.activado = true;
      if (productoCatalogo.nombre && productoCatalogo.fotoProducto && productoCatalogo.unidad && productoCatalogo.precioPorUnidad) {
        this.productoCatalogoService.createProductoCatalogo(productoCatalogo).subscribe(resp => {
          if (this.fileUpload) {
            // @ts-ignore
            this.productoCatalogoService.putImage(productoCatalogo.nombre, extension, file).subscribe(() => {
              if (resp.status === 201) {
                alert("El producto del catálogo fue creado exitosamente");
                window.location.href = "/admin/home";
              } else {
                alert("El producto del catálogo no pudo ser creado");
              }
            })
          }
        }, error => alert(error.error.message));
      } else {
        alert("Hay campos que no tienen contenido, lo que impide la creación del producto");
      }
    }
  }

  ngOnInit(): void {
    let file = <HTMLInputElement>document.getElementById("file");
    if (file != null) {
      file.addEventListener("change", () => {
        let url = <HTMLInputElement>document.getElementById("url");
        if (url != null) {
          if (this.fileUpload) {
            this.fileUpload = false;
            url.disabled = false;
          } else {
            this.fileUpload = true;
            url.disabled = true;
            url.value = "";
          }
        }
      });
    }
    let removeFile = <HTMLButtonElement>document.getElementById("removeFile");
    if (removeFile != null) {
      removeFile.addEventListener("click", () => {
        let file = <HTMLInputElement>document.getElementById("file");
        if (file != null) {
          let url = <HTMLInputElement>document.getElementById("url");
          if (url != null) {
            file.value = "";
            this.fileUpload = false;
            url.disabled = false;
          }
        }

      });
    }
    let button = document.getElementById("cancelar");
    if (button != null) {
      button.addEventListener("click", () => window.history.back());
    }
    button = document.getElementById("crear")
    if (button != null) {
      button.addEventListener("click", () => this.create());
    }

  }
}
