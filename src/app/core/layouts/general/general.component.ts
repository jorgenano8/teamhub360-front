import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, FooterComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css',
})
export class GeneralComponent {}
