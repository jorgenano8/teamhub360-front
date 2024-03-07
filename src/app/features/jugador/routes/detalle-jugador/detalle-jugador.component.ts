import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-detalle-jugador',
  standalone: true,
  imports: [],
  templateUrl: './detalle-jugador.component.html',
  styleUrl: './detalle-jugador.component.css'
})
export class DetalleJugadorComponent {

  loaded: boolean = false;
  jugador: Jugador | undefined;

  constructor(private route: ActivatedRoute,
    private jugadorService: JugadorService){}

  ngOnInit(){
    this.findById();
  }

  findById(){
    this.jugadorService.findById(this.route.snapshot.params['id']).subscribe(response => {
      this.jugador = new Jugador(response);
      this.jugador.fechaNac=new Date(this.jugador.fechaNac).toLocaleDateString();
      this.loaded=true;
    },error => {
      console.error(error);
    })
  }

}
