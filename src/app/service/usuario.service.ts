import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../resource/usuario';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  salvaNovoUsuario(usuario: Usuario) {
    console.log(usuario);
  }

  buscaCep(cep: string) {
    return this.http.get(`//viacep.com.br/ws/${cep}/json/`);
  }
}
