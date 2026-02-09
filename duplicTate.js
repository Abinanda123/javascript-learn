const duplicate = (n) => new Set(n).size !== n.length;
console.log(duplicate([1,2,3,4]));
console.log(duplicate([1,2,3,4,4]));