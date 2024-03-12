import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  paginaActiva: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.actualizarPaginaActiva(event.urlAfterRedirects);
      }
    });
  }

  actualizarPaginaActiva(url: string): void {
    switch (true) {
      case url.endsWith('dashboard'):
        this.paginaActiva = 'dashboard';
        break;
      case url.endsWith('jugadores'):
        this.paginaActiva = 'jugadores';
        break;
      case url.endsWith('equipos'):
        this.paginaActiva = 'equipos';
        break;
      case url.endsWith('competiciones'):
        this.paginaActiva = 'competiciones';
        break;
      default:
        this.paginaActiva = '';
        break;
    }
  }
}
