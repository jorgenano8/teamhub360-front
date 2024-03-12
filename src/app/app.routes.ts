import { Routes } from '@angular/router';
import { ListaJugadorComponent } from './features/jugador/routes/lista-jugador/lista-jugador.component';
import { NuevoJugadorComponent } from './features/jugador/routes/nuevo-jugador/nuevo-jugador.component';
import { DetalleJugadorComponent } from './features/jugador/routes/detalle-jugador/detalle-jugador.component';
import { ActualizarJugadorComponent } from './features/jugador/routes/actualizar-jugador/actualizar-jugador.component';
import { DashboardComponent } from './features/dashboard/routes/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'jugadores',
    component: ListaJugadorComponent,
  },
  {
    path: 'jugadores/nuevo',
    component: NuevoJugadorComponent,
  },
  {
    path: 'jugadores/:id',
    component: DetalleJugadorComponent,
  },
  {
    path: 'jugadores/:id/actualizar',
    component: ActualizarJugadorComponent,
  },
];
