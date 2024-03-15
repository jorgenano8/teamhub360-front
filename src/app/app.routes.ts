import { Routes } from '@angular/router';
import { ListaJugadorComponent } from './features/jugador/routes/lista-jugador/lista-jugador.component';
import { NuevoJugadorComponent } from './features/jugador/routes/nuevo-jugador/nuevo-jugador.component';
import { DetalleJugadorComponent } from './features/jugador/routes/detalle-jugador/detalle-jugador.component';
import { ActualizarJugadorComponent } from './features/jugador/routes/actualizar-jugador/actualizar-jugador.component';
import { DashboardComponent } from './features/dashboard/routes/dashboard.component';
import { SigninComponent } from './core/auth/routes/signin/signin.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { GeneralComponent } from './core/layouts/general/general.component';
import { SignupComponent } from './core/auth/routes/signup/signup.component';

export const routes: Routes = [
  {
    path: 'signin',
    component: AuthLayoutComponent,
    children: [{ path: '', component: SigninComponent }],
  },
  {
    path: 'signup',
    component: AuthLayoutComponent,
    children: [{ path: '', component: SignupComponent }],
  },
  {
    path: 'dashboard',
    component: GeneralComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  {
    path: 'jugadores',
    component: GeneralComponent,
    children: [{ path: '', component: ListaJugadorComponent }],
  },
  {
    path: 'jugadores/nuevo',
    component: GeneralComponent,
    children: [{ path: '', component: NuevoJugadorComponent }],
  },
  {
    path: 'jugadores/:id',
    component: GeneralComponent,
    children: [{ path: '', component: DetalleJugadorComponent }],
  },
  {
    path: 'jugadores/:id/actualizar',
    component: GeneralComponent,
    children: [{ path: '', component: ActualizarJugadorComponent }],
  },
  { path: '**', redirectTo: 'signin' },
];
