import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRotasModule } from './rotas/app.rotas.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { HomeComponent } from './home/home.component';
import { NovoComponent } from './mercadoria/novo/novo.component';
import { DetalheComponent } from './mercadoria/detalhe/detalhe.component';
import { MercadoriaService } from './service/mercadoria.service';
import { AppUsuarioModule } from './usuario/app.usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NovoComponent,
    DetalheComponent
  ],
  imports: [
  BrowserModule,
    AppRotasModule,
    AppUsuarioModule
  ],
  providers: [LoginService, MercadoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
