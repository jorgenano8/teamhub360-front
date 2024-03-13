import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Jugador } from '../../models/jugador.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-jugador',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle-jugador.component.html',
  styleUrl: './detalle-jugador.component.css',
})
export class DetalleJugadorComponent {
  loaded: boolean = false;
  jugadorID: string = this.route.snapshot.params['id'];
  jugador: Jugador | undefined;

  constructor(private route: ActivatedRoute, private jugadorService: JugadorService, private location: Location) {}

  ngOnInit() {
    this.findById();
  }

  findById() {
    this.jugadorService.findById(this.jugadorID).subscribe(
      (response) => {
        this.jugador = new Jugador(response);
        this.jugador.fechaNac = new Date(this.jugador.fechaNac).toLocaleDateString();
        this.loaded = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  atras() {
    this.location.back();
  }
}
