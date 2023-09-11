class Default {
texto: string;
numero: number;
qualquer: any;
boleano: boolean; // true , false
array: Array<any>;

constructor() {
this.method();
this.array = [{
  teste: 'teste'
}]
}
method() {
 this.texto  = 'Este é um alert simples em typeScript';
 this.numero = 13;
 return alert(this.texto);
}
}