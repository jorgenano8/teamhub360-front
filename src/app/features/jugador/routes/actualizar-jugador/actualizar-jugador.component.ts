import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { JugadorService } from '../../services/jugador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from '../../models/jugador.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actualizar-jugador',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './actualizar-jugador.component.html',
  styleUrl: './actualizar-jugador.component.css'
})
export class ActualizarJugadorComponent {

  formularioActualizarJugador = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    dni: ['', [Validators.required, Validators.pattern('^([0-9]{8})([A-Z]{1})$')]],
    fechaNac: ['', [Validators.required, this.fechaMenorAHoy]],
  })

  constructor(
    private formBuilder: FormBuilder, 
    private jugadorService: JugadorService, 
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location){}

  
  ngOnInit(){
    this.findByIdAndChargeInfo();
  }

  findByIdAndChargeInfo(){
    this.jugadorService.findById(this.route.snapshot.params['id']).subscribe(jugador => {
      
      this.formularioActualizarJugador.setValue({
        nombre: jugador.nombre,
        apellidos: jugador.apellidos,
        dni: jugador.dni,
        fechaNac: new Date(jugador.fechaNac).toISOString().substring(0, 10)
      });

    },error => {
      console.log(error);
    })
  }

  fechaMenorAHoy(control: AbstractControl): ValidationErrors | null {
    if (new Date(control.value) > new Date()) {
      return { fechaMenorAHoy: true };
    }
    return null;
  }


  onSubmit(){

    if (this.formularioActualizarJugador.invalid) { 
      return; 
    }

    const jugadorActualizado: Jugador = new Jugador(this.formularioActualizarJugador.value);

    this.jugadorService.update(this.route.snapshot.params['id'], jugadorActualizado).subscribe( response => {
        this.router.navigateByUrl('/jugadores/' + response.id);
      }, error => {
        console.error(error);
      }
    );
  }

  cancelarActualizarJugador(){
    this.formularioActualizarJugador.reset();
    this.location.back();
  }

}
