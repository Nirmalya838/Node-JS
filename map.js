let array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

let array1 = array.map((element) => {
  if (element === ' ') {
    return 'empty string';
  }
  return element;
});

console.log(array1);
