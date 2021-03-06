import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoComponent } from '../mercadoria/novo/novo.component';
import { DetalheComponent } from '../mercadoria/detalhe/detalhe.component';
import { EdicaoComponent } from '../mercadoria/edicao/edicao.component';

const appUsuarioRotes: Routes = [
  { path: 'nova-mercadoria', component: NovoComponent },
  { path: 'nova-mercadoria/:id', component: DetalheComponent },
  {path: 'edicao/:id', component: EdicaoComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(appUsuarioRotes)],
  exports: [RouterModule]
})
export class AppMercadoriaRotaModule { }
