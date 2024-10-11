import { Routes } from "@angular/router";
import { ListagemNotaComponent } from "./listar/listagem-nota.component";
import { CadastroNotaComponent } from "./cadastrar/cadastro-nota.component";
import { EdicaoNotaComponent } from "./editar/edicao-nota.component";

export const notasRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },

  { path: 'listar', component: ListagemNotaComponent },
  { path: 'cadastrar', component: CadastroNotaComponent },
  { path: 'editar', component: EdicaoNotaComponent },

]
