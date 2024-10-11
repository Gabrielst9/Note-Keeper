import { NgIf, NgForOf, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ListagemNota } from '../models/nota.model';
import { NotaService } from '../services/nota.service';

@Component({
  selector: 'app-listagem-notas',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    AsyncPipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './listagem-nota.component.html',
  styleUrl: './listagem-nota.component.scss',
})
export class ListagemNotaComponent implements OnInit {
  notas$?: Observable<ListagemNota[]>;

  constructor(private notaService: NotaService) {}

  ngOnInit(): void {
    this.notas$ = this.notaService.selecionarTodos();
  }
}
