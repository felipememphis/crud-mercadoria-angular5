import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from '../../service/mercadoria.service';
import { Mercadoria } from './../../resource/mercadoria';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  listaTipoMercadoria: string[];
  mercadoria: Mercadoria = new Mercadoria();

  constructor(private mercadoriaService: MercadoriaService) { }

  ngOnInit() {
    this.listaTipoMercadoria = this.mercadoriaService.buscaTipoMercadoria();
  }

  salvaNovaMercadoria(): void {
    console.log(this.mercadoria);
  }

  cancelaNovaMercadoria(): void {
    this.mercadoria = new Mercadoria();
  }
}
