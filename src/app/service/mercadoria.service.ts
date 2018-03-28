import { Injectable } from '@angular/core';

@Injectable()
export class MercadoriaService {

  constructor() { }

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
