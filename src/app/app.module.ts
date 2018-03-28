import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRotasModule } from './rotas/app.rotas.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { HomeComponent } from './home/home.component';
import { NovoComponent } from './mercadoria/novo/novo.component';
import { DetalheComponent } from './mercadoria/detalhe/detalhe.component';
import { HeaderComponent } from './header/header.component';
import { MercadoriaService } from './service/mercadoria.service';
import { DetalheUsuarioComponent } from './usuario/detalhe/detalhe-usuario.component';
import { NovoUsuarioComponent } from './usuario/novo/novo-usuario.component';
import { ListaUsuariosComponent } from './usuario/lista/lista-usuarios.component';
import { UsuarioService } from './service/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NovoComponent,
    DetalheComponent,
    HeaderComponent,
    DetalheUsuarioComponent,
    NovoUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRotasModule,
    HttpClientModule
  ],
  providers: [LoginService, MercadoriaService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
