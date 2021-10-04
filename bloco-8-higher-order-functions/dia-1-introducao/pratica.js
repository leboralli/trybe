const wakeUp = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const sleeping = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func);

// Ao chamar a função doingThings:
doingThings(sleeping());

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
