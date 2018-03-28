import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../resource/usuario';
import { UsuarioService } from '../../service/usuario.service';

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

  cancelaNovoUsuario(): void {
    console.log('cancela');
  }
}
