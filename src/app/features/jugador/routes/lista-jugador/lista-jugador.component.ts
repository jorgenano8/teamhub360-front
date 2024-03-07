import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { RouterModule } from '@angular/router';
import { Jugador } from '../../models/jugador.model';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-jugador',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './lista-jugador.component.html',
  styleUrl: './lista-jugador.component.css'
})
export class ListaJugadorComponent {

  loaded=false
  listaJugadores:Jugador[] = [];
  listaFiltroJugadores:Jugador[] = [];
  textoBusqueda: string ='';

  constructor(private jugadorService: JugadorService){}

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.jugadorService.findAll().subscribe(response=>{
      response.forEach(jugador =>{
        jugador.fechaNac=new Date(jugador.fechaNac).toLocaleDateString();
      })
      this.listaJugadores = response;
      this.listaFiltroJugadores = this.listaJugadores;
      this.loaded=true;
    })
  }

  eliminarJugador(jugadorID: any, jugadorNombre: string, jugadorApellidos: string){
    Swal.fire({
      title: '¿Eliminar a ' + jugadorNombre + ' ' + jugadorApellidos + '?',
      text: `Estás a punto de eliminar a un/a jugador/a del equipo. Ten en cuenta que esta acción es irreversible y resultará en la pérdida permanente de todos los datos asociados a este jugador/a en el sistema. ¿Estás seguro de que deseas proceder con la eliminación?`,
      icon: 'warning',
      showCancelButton: true,
      allowOutsideClick: false,
      reverseButtons: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar jugador/a',
    }).then((result) => {
      if (result.value) {
        this.jugadorService.delete(jugadorID).subscribe(() => {
          this.findAll();
        },error => {
          console.error(error);
        })}
      });
  }

  filtroBusqueda(){
    if (this.textoBusqueda.trim() === '') {
      this.listaFiltroJugadores = this.listaJugadores;
      return;
    }

    this.listaFiltroJugadores = this.listaJugadores.filter(jugador =>
      jugador.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
      jugador.apellidos.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
      jugador.dni.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
      jugador.fechaNac.toString().includes(this.textoBusqueda)
    );
  }

}
