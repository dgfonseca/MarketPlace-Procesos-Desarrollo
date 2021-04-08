import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Oferta} from "./oferta";

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private http: HttpClient) {
  }

  getOferta(id: number): Observable<Oferta> {
    return this.http.get<Oferta>(API_IP + OFERTA + id)
  }

  getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(API_IP + OFERTA)
  }

  createOferta(oferta: Oferta) {
    return this.http.post<Oferta>(API_IP + OFERTA, oferta)
  }

  updateOferta(id: number, oferta: Oferta) {
    return this.http.put<Oferta>(API_IP + OFERTA + id, oferta)
  }

  deleteOferta(id: number) {
    return this.http.delete<Oferta>(API_IP + OFERTA + id)
  }
}
