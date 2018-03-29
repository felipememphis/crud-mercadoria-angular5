import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../resource/usuario';
import { UsuarioService } from '../../service/usuario.service';
import { Endereco } from '../../resource/endereco';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  salvaNovoUsuario(): void {
    this.usuarioService.salvaNovoUsuario(this.usuario);
  }

  buscaCep(): void {
    this.usuarioService.buscaCep(this.usuario.endereco.cep).subscribe(result => this.montaEndereco(result));
  }

  cancelaNovoUsuario(): void {
    this.usuario = new Usuario();
  }

  private montaEndereco(endereco: any) {
    this.usuario.endereco.rua = endereco.logradouro;
    this.usuario.endereco.bairro = endereco.bairro;
    this.usuario.endereco.cidade = endereco.localidade;
    this.usuario.endereco.estado = endereco.uf;
  }
}
