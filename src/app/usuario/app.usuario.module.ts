import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuariosComponent } from './lista/lista-usuarios.component';
import { NovoUsuarioComponent } from './novo/novo-usuario.component';
import { DetalheUsuarioComponent } from './detalhe/detalhe-usuario.component';
import { UsuarioService } from '../service/usuario.service';
import { AppSharedModule } from '../shared/app.shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule
  ],
  declarations: [
    DetalheUsuarioComponent,
    NovoUsuarioComponent,
    ListaUsuariosComponent
  ],
  providers: [UsuarioService]
})
export class AppUsuarioModule { }
