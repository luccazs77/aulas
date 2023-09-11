// function normal
//function minhaFunction() {
  // este
  //this.name = 'lucas';
//}
//console.log(new minhaFunction()); //transformar em obj

const minhaArrowFunction = () => {
  this.name = 'Mateus';
};
minhaArrowFunction();
console.log(this);
