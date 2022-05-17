
//can cot be a reserve keyward ex: for, if, else ....
//should be a meaningfull
//can not stared with a number
//can not contain space
// console.log(name);
let FirstName='diane';

console.log(FirstName);
console.log(LastName);
const interstRate= 0.3;
interstRate= 1;
console.log(interstRate);
// primitive values:
// Number, Boolean, string, undefined, null
// let isApproved= false;
//reference type
//Object
//Array
//Function
let name = 'Diane';
let age = '20';
let isApproved = 'false';
let lastName='null';
console.log(name,age, isApproved,lastName)
//object
let person = {
    name : 'Alice',
    age : 30
};
console.log(person)
   person.name = 'Diane';
   person['name'] = 'tarisa'
 console.log(person.name)
 //array
 let selectedColors =  ['red', 'blue', 'orange']
 selectedColors[3]= 'black'
 console.log(selectedColors.length);

function all () {
    console.log('Diane')
}
all();
// using parameter perfoming task

function all (name , lastName){
    console.log('hello'  +  name + '' + lastName);
}
all('diane', 'Dushimimana')
all('Tarisa', 'Usabyimbabazi')
//Calculating Value
 function square(number){
     return number * number
 }
 console.log(square(2));