import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Canasta} from "./canasta";

@Injectable({
  providedIn: 'root'
})
export class CanastaService {

  constructor(private http: HttpClient) {
  }

  getCanasta(id: number): Observable<Canasta> {
    return this.http.get<Canasta>(API_IP + CANASTA + id)
  }

  getCanastas(): Observable<Canasta[]> {
    return this.http.get<Canasta[]>(API_IP + CANASTA)
  }

  createCanasta(canasta: Canasta) {
    return this.http.post<Canasta>(API_IP + CANASTA, canasta)
  }

  updateCanasta(id: number, canasta: Canasta) {
    return this.http.put<Canasta>(API_IP + CANASTA + id, canasta)
  }

  deleteCanasta(id: number) {
    return this.http.delete<Canasta>(API_IP + CANASTA + id)
  }
}
