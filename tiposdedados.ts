let a: [string, any, number] [] = [
  ['url',13,2002],
  ['port',15,512]
];

function funcao() {
  a.forEach(element => {
    console.log(element[0])
  });
}
funcao()

enum CardSuits {Clubs, Hearts, Spades, Diamonds}
function funcoes() {
  let x = 0;
  if( x === CardSuits.Hearts){
    alert('true');
  } else{
    alert('false')
  }
  console.log(CardSuits.Hearts)
}
funcoes()