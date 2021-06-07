import {Component, OnInit} from '@angular/core';
import {ProductoCatalogoService} from "../producto-catalogo.service";
import {ProductoCatalogo} from "../producto-catalogo";
import {ActivatedRoute} from "@angular/router";
import * as operators from 'rxjs/add/operator/catch';
import * as globals from "../../../globals";


@Component({
  selector: 'app-producto-catalogo-update',
  templateUrl: './producto-catalogo-update.component.html',
  styleUrls: ['./producto-catalogo-update.component.css']
})
export class ProductoCatalogoUpdateComponent implements OnInit {
  productoCatalogoService: ProductoCatalogoService;
  productoCatalogo: ProductoCatalogo;
  fileUpload: Boolean;
  file: File | null = null;
  extension: String | null = null;

  constructor(route: ActivatedRoute, productoCatalogoService: ProductoCatalogoService) {
    this.productoCatalogoService = productoCatalogoService;
    this.productoCatalogoService.getProductoCatalogo(route.snapshot.params['id']).subscribe((productoCatalogo) => {
      this.productoCatalogo = productoCatalogo;
      (<HTMLInputElement>document.getElementsByName("nombre")[0]).value = this.productoCatalogo.nombre;
      (<HTMLInputElement>document.getElementsByName("fotoProducto")[0]).value = this.productoCatalogo.fotoProducto;
      (<HTMLInputElement>document.getElementsByName("unidad")[0]).value = this.productoCatalogo.unidad;
      (<HTMLInputElement>document.getElementsByName("precio")[0]).innerHTML = String('$' + this.productoCatalogo.precioPorUnidad + '/' + this.productoCatalogo.unidad);
    });
  }

  modificar() {
    if (confirm("Está seguro que quiere modificar el producto del catalogo?")) {
      this.productoCatalogo.nombre = (<HTMLInputElement>document.getElementsByName("nombre")[0]).value;
      this.verificarFile();
      this.productoCatalogo.unidad = (<HTMLInputElement>document.getElementsByName("unidad")[0]).value;
      if (this.productoCatalogo.nombre && this.productoCatalogo.fotoProducto && this.productoCatalogo.unidad && this.productoCatalogo.precioPorUnidad) {
        this.productoCatalogoService.updateProductoCatalogo(this.productoCatalogo.id, this.productoCatalogo).subscribe(resp => {
          if (this.fileUpload) {
            // @ts-ignore
            this.productoCatalogoService.putImage(this.productoCatalogo.nombre, this.extension, this.file).subscribe(() => {
              if (resp.status === 200) {
                alert("El producto del catálogo fue actualizado exitosamente");
                window.location.href = "/admin/producto-catalogo/list";
              } else {
                alert("El producto del catálogo no pudo ser actualizado");
              }
            });
          }
        }, error => alert(error.error.message));
      } else {
        alert("Hay campos que no tienen contenido, lo que impide la actualización del producto");
      }
    }
  }

  ngOnInit(): void {
    this.eventListenerFile();
    this.eventListenerRemoveFile();
    let button = document.getElementById("cancelar");
    if (button != null) {
      button.addEventListener("click", () => window.history.back());
    }
    button = document.getElementById("modificar")
    if (button != null) {
      button.addEventListener("click", () => this.modificar());
    }

  }

  eventListenerFile(): void {
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
  }
  eventListenerRemoveFile(){
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
  }

  verificarFile(): void {
    if (this.fileUpload) {
      let fileElement = <HTMLInputElement>document.getElementById("file")
      if (fileElement.files != null) {
        this.file = fileElement.files[0];
        let split = this.file.name.split(".");
        this.extension = split[split.length - 1];
        this.productoCatalogo.fotoProducto = globals.IMAGE_API + "images/" + this.productoCatalogo.nombre + "." + this.extension;
      }
    } else {
      this.productoCatalogo.fotoProducto = (<HTMLInputElement>document.getElementById("url")).value;
    }
  }
}
