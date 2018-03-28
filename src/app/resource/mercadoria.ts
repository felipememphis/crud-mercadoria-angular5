export class Mercadoria {

  nome: string;
  quantidade: string;
  localizacaoEstoque: string;
  tipoMercadoria: string;
  dataValidade: Date;
  preco: string;
  marca: string;

  constructor() {
    this.nome = '';
    this.quantidade = '';
    this.localizacaoEstoque = '';
    this.tipoMercadoria = '';
    this.preco = '';
    this.marca = '';
  }
}
