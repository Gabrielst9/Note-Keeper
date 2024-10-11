import { Component } from '@angular/core';
import { Observable, catchError, EMPTY } from 'rxjs';
import { ListagemNota } from '../models/nota.model';
import { NotaService } from '../services/nota.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-listagem-nota',
  standalone: true,
  imports: [NgIf, NgForOf, AsyncPipe ,RouterLink ,MatCardModule, MatChipsModule, MatTooltipModule, MatIconModule],
  templateUrl: './listagem-nota.component.html',
  styleUrl: './listagem-nota.component.scss',
})
export class ListagemNotaComponent {
  notas$?: Observable<ListagemNota[]>;

  constructor(private notaService: NotaService) {}

  ngOnInit(): void {
    this.notas$ = this.notaService.selecionarTodos().pipe(
      catchError((err, caught) => {
        this.notificarErro(err);
        return EMPTY;
      })
    );
  }

  private notificarErro(erro: any) {
    console.error(
      'Não foi possível obter dados do servidor, tente novamente mais tarde!'
    );
  }
}
