var myArray = [1,"vinay","kumar","20 floors", 5000, 3];
console.log(myArray);
let arrleng = myArray.push("pulsar bike", "electric car");
console.log(myArray);
console.log(arrleng);
delItem = myArray.pop();
console.log(delItem);

let delitem2 = myArray.shift();
console.log(delitem2);

let newlen = myArray.unshift(10,"rich");
console.log(newlen);
console.log(myArray);


var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift(); 

console.log('myFish after:', myFish); 
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted); 
// Removed this element: angel

