import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListaUsuariosComponent } from './lista/lista-usuarios.component';
import { NovoUsuarioComponent } from './novo/novo-usuario.component';
import { DetalheUsuarioComponent } from './detalhe/detalhe-usuario.component';
import { UsuarioService } from '../service/usuario.service';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    DetalheUsuarioComponent,
    NovoUsuarioComponent,
    ListaUsuariosComponent,
    HeaderComponent
  ],
  providers: [UsuarioService],
  exports: [HeaderComponent, FormsModule, HttpClientModule]
})
export class AppUsuarioModule { }
