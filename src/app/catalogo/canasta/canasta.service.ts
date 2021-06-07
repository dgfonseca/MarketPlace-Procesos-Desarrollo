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

  getCanastas(): Observable<Canasta[]> {
    return this.http.get<Canasta[]>(globals.API_IP + globals.CANASTA);
  }

  updateCanasta(id: number, canasta: Canasta) {
    return this.http.put<Canasta>(globals.API_IP + globals.CANASTA + id + '/', canasta, {observe: 'response'});
  }
}
