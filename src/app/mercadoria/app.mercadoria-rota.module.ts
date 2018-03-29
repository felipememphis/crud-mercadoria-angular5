import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoComponent } from '../mercadoria/novo/novo.component';
import { DetalheComponent } from '../mercadoria/detalhe/detalhe.component';

const appUsuarioRotes: Routes = [
  { path: 'nova-mercadoria', component: NovoComponent },
  { path: 'detalhe-mercadoria', component: DetalheComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(appUsuarioRotes)],
  exports: [RouterModule]
})
export class AppMercadoriaRotaModule { }
