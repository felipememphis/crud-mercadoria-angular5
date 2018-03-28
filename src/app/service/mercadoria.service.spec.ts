import { TestBed, inject } from '@angular/core/testing';

import { MercadoriaService } from './mercadoria.service';

describe('MercadoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercadoriaService]
    });
  });

  it('should be created', inject([MercadoriaService], (service: MercadoriaService) => {
    expect(service).toBeTruthy();
  }));
});
