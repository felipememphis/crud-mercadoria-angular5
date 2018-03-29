import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoComponent } from '../mercadoria/novo/novo.component';
import { DetalheComponent } from '../mercadoria/detalhe/detalhe.component';
import { MercadoriaService } from '../service/mercadoria.service';
import { HomeComponent } from '../home/home.component';
import { AppSharedModule } from '../shared/app.shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule
  ],
  declarations: [
    HomeComponent,
    NovoComponent,
    DetalheComponent
  ],
  providers: [MercadoriaService]
})
export class AppMercadoriaModule { }
