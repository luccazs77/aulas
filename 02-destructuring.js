const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  age: 23,
  instagram: '@lutriz77',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};


const {firstName,age, skills} = user;
const [primary,secudary,tertiary,quaternary] = skills;

console.log(secudary);