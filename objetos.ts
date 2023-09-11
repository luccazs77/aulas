let obj: {name: string, age: number, active?: boolean} = {
  name: 'Pedro Lucas',
  age:20
}

let obj2: {[key: string]: string} = {  // um obj com qualque tipo de dado  sendo string
  nome: 'Pedro',
  bar: 'Lucas'
}

function fun(nome: string, sobrenome?: string) {

}
fun('nome');