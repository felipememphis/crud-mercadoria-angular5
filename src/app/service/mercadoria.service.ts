import { Injectable } from '@angular/core';
import { Mercadoria } from './../resource/mercadoria';

@Injectable()
export class MercadoriaService {

  constructor() { }

  salvaNovaMercadoria(mercadoria: Mercadoria) {
    console.log(mercadoria);
  }

  buscaTipoMercadoria(): string[] {
    return [
      'Bebida',
      'Frutas',
      'Legumes',
      'Laticínios',
      'Limpeza',
      'Conserva e enlatados',
      'Alimentos básicos'
    ];
  }
}
