import { Injectable } from '@angular/core';
import { Usuario } from '../resource/usuario';

@Injectable()
export class UsuarioService {

  constructor() { }

  salvaNovoUsuario(usuario: Usuario) {
    console.log(usuario);
  }
}
