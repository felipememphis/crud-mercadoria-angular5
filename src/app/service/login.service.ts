import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  logar(nome, senha){
    console.log(nome + senha);
    console.log(btoa(nome + senha));
  }
}
