import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductorPostulante} from "./productor-postulante";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class ProductorPostulanteService {

  constructor(private http: HttpClient) {
  }

  getProductor(id: number): Observable<ProductorPostulante> {
    return this.http.get<ProductorPostulante>(globals.API_IP + globals.PRODUCTOR_POSTULANTE + id)
  }

  getProductores(): Observable<ProductorPostulante[]> {
    return this.http.get<ProductorPostulante[]>(globals.API_IP + globals.PRODUCTOR_POSTULANTE)
  }

  createProductor(productorPostulante: ProductorPostulante) {
    return this.http.post<ProductorPostulante>(globals.API_IP + globals.PRODUCTOR_POSTULANTE, productorPostulante)
  }

 
}
