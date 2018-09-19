const listNum = [2, 4, 6, 8];

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(listNum));

function sumWhile(list) {
  let sum = 0;
  let count = 0;
  while (count < list.length) {
    sum += list[count];
    count++;
  }
  return sum;
}

console.log(sumWhile(listNum));


function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion(listNum));


function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(listNum));
