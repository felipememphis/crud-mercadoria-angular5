import { Component, OnInit, ViewChild } from '@angular/core';
import { MercadoriaService } from '../../service/mercadoria.service';
import { Mercadoria } from './../../resource/mercadoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  listaTipoMercadoria: string[];
  mercadoria: Mercadoria = new Mercadoria();
  @ViewChild('formMercadoria') form: NgForm;

  constructor(private mercadoriaService: MercadoriaService) { }

  ngOnInit() {
    this.listaTipoMercadoria = this.mercadoriaService.buscaTipoMercadoria();
  }

  edicaoMercadoria(): void {
    console.log(this.mercadoria);
  }

  cancelaEdicaoMercadoria(): void {
    this.mercadoria = new Mercadoria();
  }
}
