import {Component, OnInit} from '@angular/core';
import {ProductorPostulanteService} from '../productor-postulante.service';
import {ProductorPostulante} from '../productor-postulante';

@Component({
  selector: 'app-productor-postulante-create',
  templateUrl: './productor-postulante-create.component.html',
  styleUrls: ['./productor-postulante-create.component.css']
})
export class ProductorPostulanteCreateComponent implements OnInit {

  productorPostulanteService: ProductorPostulanteService;


  constructor(productorPostulanteService: ProductorPostulanteService) {
    this.productorPostulanteService = productorPostulanteService;
  }

  create() {
    if (confirm('Está seguro que quiere enviar su postulación?')) {
      const productorPostulante = new ProductorPostulante();
      productorPostulante.nombreFinca = (<HTMLInputElement> document.getElementsByName('nombreFinca')[0]).value;
      productorPostulante.nombre = (<HTMLInputElement> document.getElementsByName('nombre')[0]).value;
      productorPostulante.correo = (<HTMLInputElement> document.getElementsByName('correo')[0]).value;
      productorPostulante.celular = parseFloat((<HTMLInputElement> document.getElementsByName('celular')[0]).value);
      productorPostulante.telefono = parseFloat((<HTMLInputElement> document.getElementsByName('telefono')[0]).value);
      productorPostulante.municipio = (<HTMLInputElement> document.getElementsByName('municipio')[0]).value;
      productorPostulante.productos = (<HTMLInputElement> document.getElementsByName('productos')[0]).value;
      productorPostulante.cultivos = (<HTMLInputElement> document.getElementsByName('cultivos')[0]).value;
      productorPostulante.procesos = (<HTMLInputElement> document.getElementsByName('procesos')[0]).value;
      productorPostulante.vereda = (<HTMLInputElement> document.getElementsByName('vereda')[0]).value;
      if (productorPostulante.celular < 0 || productorPostulante.telefono < 0) {
        alert('Hay campos que no tienen contenido, lo que impide la creación de la postulación');
      }
      if (productorPostulante.nombreFinca && productorPostulante.nombre && productorPostulante.correo && productorPostulante.celular && productorPostulante.telefono && productorPostulante.municipio && productorPostulante.productos && productorPostulante.cultivos && productorPostulante.procesos && productorPostulante.vereda) {
        console.log(productorPostulante);
        this.productorPostulanteService.createProductor(productorPostulante).subscribe(resp => {
          if (resp.status === 200) {
            alert('La postulación fue creada exitosamente');
            window.location.href = '/home';
          } else {
            alert('La postulación no pudo ser creada');
          }
        }, error => alert(error.error.message));
      } else {
        alert('Hay campos que no tienen contenido, lo que impide el envio de la postulación');
      }
    }
  }

  ngOnInit(): void {

  }

}
