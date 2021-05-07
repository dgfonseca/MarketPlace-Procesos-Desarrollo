import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Oferta} from "./oferta";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private http: HttpClient) {
  }

  getOferta(id: number): Observable<Oferta> {
    return this.http.get<Oferta>(globals.API_IP + globals.OFERTA + id)
  }

  getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(globals.API_IP + globals.OFERTA)
  }

  createOferta(oferta: Oferta) {
    return this.http.post<Oferta>(globals.API_IP + globals.OFERTA, oferta)
  }

  updateOferta(id: number, oferta: Oferta) {
    return this.http.put<Oferta>(globals.API_IP + globals.OFERTA + id, oferta)
  }

  deleteOferta(id: number) {
    return this.http.delete<Oferta>(globals.API_IP + globals.OFERTA + id)
  }

  getOfertasProductor(id: number): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(globals.API_IP + "productorOfertas/"+id)
  }
}
