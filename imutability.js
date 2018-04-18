var a = {name:"Fred"};
var b = a;
b.name = "John";
console.log(a);

// -----------
var b = Object.assign({},a);
b.name = "John";
console.log(a);
console.log(b);

// -----------
a = {name:"Fred", age:35};
var b = Object.assign({},a, {name:"Smith"});
b.name = "John";
console.log(a);
console.log(b);

// ----------- ES6
a = {name:"Fred", age:36};
var b = {... ,a, {name:"Smith"}};
b.name = "John";
console.log(a);
console.log(b);


// ----------- shallow copy
a = {name:"Fred", age:35, location:{street:"Forest Street"}};
var b = Object.assign({},a, {name:"Smith"});
b.location.street = "John";
console.log(a);
console.log(b);


// ----------- deep copy
a = {name:"Fred", age:35, location:{street:"Forest Street"}};
var b = Object.assign({},a, {location:{...a.location}}});
b.location.street = "John";
console.log(a);
console.log(b);

//arrays 0
var a = [0,1,2];
var b = a;
b.push(5);
console.log(a);

//arrays
var a = [0,1,2];
var b = a.concat(5);
console.log(a);

//filters
var a = [0,1,2];
var b = a.filter((el)=>el !== 2);
console.log(a);

// NOTE filter, map, reduce is returning an brand new object

https://daveceddia.com/how-does-redux-work/
npm install -g create-react-app
create-react-app redux-intro