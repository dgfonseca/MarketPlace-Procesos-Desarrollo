import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Canasta} from "./canasta";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class CanastaService {

  constructor(private http: HttpClient) {
  }

  getCanasta(id: number): Observable<Canasta> {
    return this.http.get<Canasta>(globals.API_IP + globals.CANASTA + id + "/")
  }

  getCanastas(): Observable<Canasta[]> {
    return this.http.get<Canasta[]>(globals.API_IP + globals.CANASTA)
  }

  createCanasta(canasta: Canasta) {
    return this.http.post<Canasta>(globals.API_IP + globals.CANASTA, canasta)
  }

  updateCanasta(id: number, canasta: Canasta) {
    return this.http.put<Canasta>(globals.API_IP + globals.CANASTA + id + "/", canasta)
  }

  deleteCanasta(id: number) {
    return this.http.delete<Canasta>(globals.API_IP + globals.CANASTA + id + "/")
  }
}
