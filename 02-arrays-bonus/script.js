const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}

console.log(reversedTeachers);
console.log('---');
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    // console.log(teachers[i]);
    longNames.push(teachers[i]);
  }
}

console.log(longNames);
console.log('---');
// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = true;

for (i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    console.log(isFabioPresent);
  }
}
// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString

// const teachersString = `${teachers[0]}, ${teachers[1]}, ${teachers[2]}, ${teachers[3]}, ${teachers[4]}, ${teachers[5]}, ${teachers[6]}.`;
let teachersString = '';

for (i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];
  if (i != 6) {
    teachersString += ', ';
  } else
  teachersString += '.';
}

console.log(teachersString);