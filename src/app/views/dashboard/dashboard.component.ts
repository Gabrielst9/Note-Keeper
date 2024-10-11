import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ItemDashboard } from './models/item-dashboard.model';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, NgForOf , MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  itens: ItemDashboard[] = [
    {
      titulo:'Categorias', descricao: 'Ver notas organizadas em categorias', rota:'/categorias'
    },
    {
      titulo: 'Notas', descricao: 'Ver todas as notas existentes', rota: '/notas'
    }
  ]
}
