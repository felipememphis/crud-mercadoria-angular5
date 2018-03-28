import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from '../../service/mercadoria.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  listaTipoMercadoria: string[];

  constructor(private mercadoriaService: MercadoriaService) { }

  ngOnInit() {
    this.listaTipoMercadoria = this.mercadoriaService.buscaTipoMercadoria();
    console.log(this.listaTipoMercadoria);
  }

}
