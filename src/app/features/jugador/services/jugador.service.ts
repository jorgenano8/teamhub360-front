import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  jugadorURL:string="http://localhost:8080/jugador"

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Jugador[]>(this.jugadorURL);
  }

  findById(jugadorID: any){
    return this.http.get<Jugador>(this.jugadorURL + "/" + jugadorID);
  }

  save(jugador: Jugador){
    return this.http.post<Jugador>(this.jugadorURL, jugador);
  }

  update(jugadorID: any, jugador: Jugador){
    return this.http.put<Jugador>(this.jugadorURL + "/" + jugadorID, jugador);
  }

  delete(jugadorID: any){
    return this.http.delete(this.jugadorURL + "/" + jugadorID);
  }
}
