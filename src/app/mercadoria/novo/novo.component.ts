import { Component, OnInit, ViewChild } from '@angular/core';
import { MercadoriaService } from '../../service/mercadoria.service';
import { Mercadoria } from './../../resource/mercadoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  listaTipoMercadoria: string[];
  mercadoria: Mercadoria = new Mercadoria();
  @ViewChild('formMercadoria') form: NgForm;

  constructor(private mercadoriaService: MercadoriaService) { }

  ngOnInit() {
    this.listaTipoMercadoria = this.mercadoriaService.buscaTipoMercadoria();
  }

  salvaNovaMercadoria(): void {
    if (this.form.valid) {
      this.mercadoriaService.salvaNovaMercadoria(this.mercadoria);
    }
  }

  cancelaNovaMercadoria(): void {
    this.mercadoria = new Mercadoria();
  }
}
