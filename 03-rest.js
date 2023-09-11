const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  age: 23,
  instagram: '@lutriz77',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

// rest (resto) operator
const {firstName, skills,...resto} = user;
const [primary, secudary,...restoSkills] = skills;

console.log(resto);