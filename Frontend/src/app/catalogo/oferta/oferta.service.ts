import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OfertaProductor} from "./oferta-productor";

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private http: HttpClient) {
  }

  getOferta(id: number): Observable<OfertaProductor> {
    return this.http.get<OfertaProductor>(API_IP + OFERTA_PRODUCTOR + id)
  }

  getOfertas(): Observable<OfertaProductor[]> {
    return this.http.get<OfertaProductor[]>(API_IP + OFERTA_PRODUCTOR)
  }

  createOferta(ofertaProductor: OfertaProductor) {
    return this.http.post<OfertaProductor>(API_IP + OFERTA_PRODUCTOR, ofertaProductor)
  }

  updateOferta(id: number, ofertaProductor: OfertaProductor) {
    return this.http.put<OfertaProductor>(API_IP + OFERTA_PRODUCTOR + id, ofertaProductor)
  }

  deleteOferta(id: number) {
    return this.http.delete<OfertaProductor>(API_IP + OFERTA_PRODUCTOR + id)
  }
}
