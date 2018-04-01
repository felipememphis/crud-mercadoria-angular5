import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRotasModule } from './rotas/app.rotas.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';

import { AppUsuarioModule } from './usuario/app.usuario.module';
import { AppMercadoriaModule } from './mercadoria/app.mercadoria.module';
import { PrimeiroNomeMaiusculoDirective } from './directive/primeiro-nome-maiusculo.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrimeiroNomeMaiusculoDirective,
  ],
  imports: [
  BrowserModule,
    AppRotasModule,
    AppUsuarioModule,
    AppMercadoriaModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
