const example1 = [1, 2, 3, 1, 3];
const example2 = [1, 2, 3, 4, 5];
const example3 = [5, 5, 5, 5, 5];
const example4 = [10, 9, 10, 10, 9, 8];


function nonUnique(data) {
  const arr = [];
  data.forEach(item => {
    if (!isUnique(data, item)) arr.push(item);
  })
  return arr;
}

function isUnique(arr, el) {
  return arr.filter(item => item === el).length === 1;
}

module.exports = {
  nonUnique,
  isUnique,
  example1,
  example2,
  example3,
  example4
};
