import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoComponent } from '../mercadoria/novo/novo.component';
import { DetalheComponent } from '../mercadoria/detalhe/detalhe.component';
import { MercadoriaService } from '../service/mercadoria.service';
import { HomeComponent } from '../home/home.component';
import { AppSharedModule } from '../shared/app.shared.module';
import { AppMercadoriaRotaModule } from './app.mercadoria-rota.module';
import { EdicaoComponent } from './edicao/edicao.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    AppMercadoriaRotaModule
  ],
  declarations: [
    HomeComponent,
    NovoComponent,
    EdicaoComponent,
    DetalheComponent
  ],
  providers: [MercadoriaService]
})
export class AppMercadoriaModule { }
