import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { CadastroCategoria } from '../models/categoria.models';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NotificacaoService } from '../../../core/notificacao/notificacao.service';

@Component({
  selector: 'app-cadastro-categoria',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-categoria.component.html',
})
export class CadastroCategoriaComponent implements OnInit{
  categoriaForm: FormGroup;

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private notificacao: NotificacaoService
  ) {
    this.categoriaForm = new FormGroup({
      titulo: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    });
  }

  ngOnInit(): void {
      this.notificacao.sucesso('Test')
  }


  //getter
  get titulo() {
    return this.categoriaForm.get('titulo');
  }

  cadastrar() {
    const novaCategoria: CadastroCategoria = this.categoriaForm.value;

    this.categoriaService.cadastrar(novaCategoria).subscribe((res) => {
      console.log(`Categoria ID [${res.id}] cadastrada com sucesso!`);

      this.router.navigate(['/categorias']);
    });
  }
}
