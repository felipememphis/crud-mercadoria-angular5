import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoUsuarioComponent } from '../usuario/novo/novo-usuario.component';
import { ListaUsuariosComponent } from '../usuario/lista/lista-usuarios.component';
import { DetalheUsuarioComponent } from './detalhe/detalhe-usuario.component';
import { AppUsuarioModule } from './app.usuario.module';

const appUsuarioRotes: Routes = [
  { path: 'detalhe-usuario', component: DetalheUsuarioComponent },
  { path: 'novo-usuario', component: NovoUsuarioComponent },
  { path: 'lista-usuario', component: ListaUsuariosComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(appUsuarioRotes)],
  exports: [RouterModule]
})
export class AppUsuarioRotaModule { }
