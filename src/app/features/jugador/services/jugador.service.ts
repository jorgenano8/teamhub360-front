import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador.model';
import { environment } from '../../../../environments/environment';

const jugadorURL: string = environment.url_api + 'jugador';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Jugador[]>(jugadorURL);
  }

  findById(jugadorID: any) {
    return this.http.get<Jugador>(jugadorURL + '/' + jugadorID);
  }

  save(jugador: Jugador) {
    return this.http.post<Jugador>(jugadorURL, jugador);
  }

  update(jugadorID: any, jugador: Jugador) {
    return this.http.put<Jugador>(jugadorURL + '/' + jugadorID, jugador);
  }

  delete(jugadorID: any) {
    return this.http.delete(jugadorURL + '/' + jugadorID);
  }
}
