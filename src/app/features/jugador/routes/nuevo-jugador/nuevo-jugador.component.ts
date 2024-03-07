import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-jugador',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-jugador.component.html',
  styleUrl: './nuevo-jugador.component.css'
})
export class NuevoJugadorComponent {

  formularioNuevoJugador = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    dni: ['', [Validators.required, Validators.pattern('^([0-9]{8})([A-Z]{1})$')]],
    fechaNac: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
    private jugadorService: JugadorService,
    private router: Router){}


  onSubmit() {

    if (this.formularioNuevoJugador.invalid) { 
      return; 
    }

    const nuevoJugador: Jugador = new Jugador(this.formularioNuevoJugador.value);

    this.jugadorService.save(nuevoJugador).subscribe( response => {
        this.router.navigateByUrl('/jugadores/' + response.id);
      }, error => {
        console.error(error);
      }
    );
  }

  cancelarNuevoJugador(){
    this.formularioNuevoJugador.reset;
    this.router.navigateByUrl('/jugadores');
  }

}
