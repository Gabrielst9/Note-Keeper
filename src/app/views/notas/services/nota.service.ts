import { Injectable } from '@angular/core';
import { CadastroNota, DetalhesNota, EdicaoNota, ListagemNota, NotaCriada, NotaEditada } from '../models/nota.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private readonly url: string = `${environment.API_URL}/notas`;

  constructor(private http: HttpClient) {}

  cadastrar(novaCategoria: CadastroNota): Observable<NotaCriada> {
    return this.http.post<NotaCriada>(this.url, novaCategoria);
  }

  editar(id: number, categoriaEditada: EdicaoNota): Observable<NotaEditada>
  {
    const urlCompleto = `${this.url}/${id}`;

    return this.http.put<NotaEditada>(urlCompleto, categoriaEditada);
  }

  excluir(id: number) {
    const urlCompleto = `${this.url}/${id}`;

    return this.http.delete<any>(urlCompleto);
  }

  selecionarPorId(id: any): Observable<DetalhesNota>
  {
    const urlCompleto = `${this.url}/${id}?_expand=categoria`;

    return this.http.get<DetalhesNota>(urlCompleto);
  }

  selecionarTodos(): Observable<ListagemNota[]> {
    const urlCompleto = `${this.url}?_expand=categoria`;


    return this.http.get<ListagemNota[]>(this.url);
  }
}
