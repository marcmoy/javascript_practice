function printChildren(parent, ...children) {
  console.log(`${parent}s children are:`);
  children.forEach((child) => {
    console.log(child);
  });
}

printChildren("mommy", "son", "daughter");

function addThree (nums) {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
}

var threeNums = [1,2,3];

console.log(addThree(threeNums));

function dinnerTonightIs(food = 'pizza'){
  console.log(`Dinner tonight is ${food}.`);
}

dinnerTonightIs("macaroni");


var arr = [1,2,3];

var newArr = arr.map(Math.sqrt);

console.log(newArr);
