import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { NovoComponent } from '../mercadoria/novo/novo.component';
import { DetalheComponent } from '../mercadoria/detalhe/detalhe.component';
import { NovoUsuarioComponent } from '../usuario/novo/novo-usuario.component';
import { ListaUsuariosComponent } from '../usuario/lista/lista-usuarios.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nova-mercadoria', component: NovoComponent },
  { path: 'detalhe-mercadoria', component: DetalheComponent },
  { path: 'novo-usuario', component: NovoUsuarioComponent },
  { path: 'lista-usuario', component: ListaUsuariosComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRotasModule { }
