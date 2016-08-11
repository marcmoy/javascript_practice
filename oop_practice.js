function titlize(names, callback){

  function capsWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  var capsNames = names.map(capsWord);

  callback(capsNames);
}

var names = ["marc", "sean", "cialina"];

function printCallback(arg){
  console.log(arg);
}

titlize(names, printCallback);

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

let tricks = ['dunk', 'dribble', 'shoot', 'pass'];
let dumbo = new Elephant('Dumbo', 300, tricks);
console.log(dumbo);

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phRRRRRR!!!'`);
}

Elephant.prototype.grow = function(){
  this.height += 12;
  console.log(this.height);
  return this.height;
}

Elephant.prototype.addTrick = function(trick){
  this.tricks.push(trick);
  console.log(this.tricks);
  return this.tricks;
}

Elephant.prototype.play = function() {

  let numOfTricks = this.tricks.length;
  let trick_idx = Math.floor((Math.random() * numOfTricks));
  let randomTrick = this.tricks[trick_idx];

  console.log(`${this.name} is ${randomTrick}ing!`);
}

dumbo.trumpet();
dumbo.grow();
dumbo.addTrick("run");
dumbo.play();
