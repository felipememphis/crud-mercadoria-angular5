import { Endereco } from './endereco';

export class Usuario {

  nome: string;
  email: string;
  senha: string;
  dataCadastro: Date;
  endereco: Endereco;

  constructor() {
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.endereco = new Endereco();
  }
}
