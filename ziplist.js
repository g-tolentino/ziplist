function zipList(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
  return newArray;
}

function zipListTheSimpleWay(array1, array2) {
  const objectArray = _.zip(array1, array2);
  return _.flatten(objectArray);
}

const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

console.log(zipList(array1, array2));
console.log(zipListTheSimpleWay(array1, array2));
