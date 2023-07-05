/* let name='Rajan shrestha'
let address, zip, state
address='chapagaon'
zip='1398'
state='bag0mati'
// name='ali'
console.log(name,address,zip,state)

/* let fullname='random'
console.log(fullname)*/
// var value='some value'
// value='some other value'

/*let name='john'
const lastname='shrestha'

console.log(value,name,lastname) */

// concatination
/* const web='facebook'
const url='https://www.'+web+'.com'
console.log(url) */

// numbers
/* const num=32
const num2=32
const num3=32

const add=num+num2
const sub=num-num2
const mult=num*num3
const div=num/num2
console.log(add)
console.log(add) */

// numbers addtional
/* let num=20
num+=1
num+=1
num+=1
num+=1
num++
num--

const slices=10
const child=5
const amount=slices*child
const random=1+1+1+1+1*10
const ran2=(1+1+1+1)*10

console.log(random)
console.log(ran2)
console.log(amount) */

// implicit type conversion
/* const name='rajan'
const lname='shrestha'
const fname=name+ ' ' + lname
console.log(fname)
 */

// data types
/* const text='some text'
const num=34
console.log(num)
let valu=2
let valu1=3
const res=null
let name=true
console.log(typeof valu,typeof valu1,typeof res,typeof name)
 */

// ARRAYS   
 
/* const fren1='anna'
const fren2='anna'
const fren3='anna'
const fren4='anna'
const frends=['john','peter','bob','susy',45,undefined,null]

let bestfren=frends[2]
console.log(frends)
console.log(frends[4])
console.log(bestfren)
console.log(frends[3])
console.log(fren1)

 */

// FUNCTIONS
/* function hello(){
    console.log('helo ther bob')
    console.log('helo ther ana')
    console.log('helo ther susy')
}
hello()
hello() */

// PARAMETERS ARGUMENTS
/* const bob='bob'
const Susy='susy'
const ana='ana'

function greet(name,second){
    console.log(second)
    console.log('helo there' + '', name)
}
greet(4)
greet (ana,'bob')
greet('susy')
 */

// FUNCTION return

/* vonst wallheight=90

function calculate(value){
    return value*2.54
    console.log('helo')
    console.log('helo')
    console.log('helo')
    console.log('helo')
}
calculate(200)
const width=calculate(100)
const height=calculate(wallheight)
const dimensions=[width,height]
console.log(dimensions) */

// EXPRESSIONS
/* function addvalues(num1,num2){
    return num1+num2
}

const fvalue=addvalues(3,4)
const svalue=addvalues(14,10)
const add= function(num1,num2){
    return num1+num2
}

const values=[fvalue,svalue,add(1,2)]
console.log(values)
 */


// OBJECTS
/* const person={
    name:'raja',
    lname: 'shre',
    age: 24,
    education: false,
    married: true,
    siblings:['ana','susan','susy'],
    greeting(){
        console.log('helo my name is raj');
    },
};
const age=person.age;
console.log(age)
person.name='bob'
console.log(person.name)
console.log(person.siblings[2])
person.greeting()
 */

// CONDITIONAL STATEMENT
/* const value=2>1
// console.log(typeof value)
const value1=1<2
if(value1){
    console.log('helo rajan')
    
}else{
    console.log('helo world')
} */
/* 
const num1=3
const num2=3
const res = num1>num2
const value=false
if(!value){
    console.log('value is false')
}
if(num1>num2){
    console.log('1st num is greater than 2nd num')
}else if(res){
    console.log('1st num is equal to 2nd num')

}else{
    console.log('2nd num is greater than 1st num')

}
 */

// EQUALITY
/* const num=3
const num2='3'
const value = num !=num2
const value2 = num !==num2
console.log(value)
console.log(value2) */

// LOGICAL OPERATORS

/* const name= 'raj'
const age= 23
if(name !=='bob' && age===21){
    console.log('helo there user')
}else{
    console.log('wrong values')
} */


// SWITCH statement 
/* const dice=3;
switch(dice){
    case 1:
      console.log('you got one')
      break;
    case 2:
        console.log('you got two')
        break;
    case 3:
        console.log('you got three  ')
        break;
    default:
        console.log('you didn;t roll the dice')
        
}
    if(dice===1){
        console.log('you got one')
    }else if (dice===2){
        console.log('you go two')
    }else{
        console.log('you didnt roll the dice')
    } */


// while loops
/* let amount=10
while(amount>0){
    console.log('i have '+ amount + ''+' dollars and i m goin to the mall')
    amount--;
} */

// DO WHILE LOOP
 /* let money= 12
 do{
    console.log('you have'+money+ 'dollars')
    money++
 } while(money<10)  
 */

/* 
// FORLOOP
 for (let num=11;num>=0;num--){
    console.log('and the numberis:'+num)
 }
 */







// CHALLENGES
/* const calculateTotal=function random(subtotal,tax){
    return subtotal+tax
}
 const order1=calculateTotal(1,2)
 const order2=calculateTotal(2,3)
 const order3=calculateTotal(3,4)
 console.log(order1) */

 /* function calculaterectangle(l,b){
    return 2*(l+b);
 };

  const res= calculaterectangle(2,3)
  console.log(res) */

  /* const car={
    make:'dodge',
    model:'hundia',
    year:2012,
    colors: ['blue','red'],
    hybrid: false,
    drive:function(){
        console.log('driving....')
    },
    stop:function(){
        console.log('stopped!!')
    },
  };
  console.log(car.make)
  console.log(car.colors[0])
  car.drive()
  car.stop() */

/* const person1={
    name: 'raj',
    age: 23,
    status:'resident',
};
const person2={
    name: 'hem',
    age: 25,
    status:'tourist',
};
if (person1.age>=18 && person2.name==='hem'){
    console.log('you can cast a vote')
}else{
    console.log('you are ineligibles')
} */

/* function fullname(firstname,lastname){
    const fullname=   `${firstname} ${lastname}`;
    return fullname.toUpperCase();
}
// console.log(fullname({lastname:'shrestha', firstname:'raj'}));
console.log(fullname('raj','shrestha'))
console.log(fullname({ lastname:'shres', firstname:'raj' }));
 */

const students=[
    {
        id:1,
        name:'rajan',
        score:90,
        favsub:'comp',
    },
    {
        id:2,
        name:'tajan',
        score:40,
        favsub:'kmp',
    },
    {
        id:3,
        name:'yajan',
        score:44,
        favsub:'emp',
    },
    {
        id:4,
        name:'uajan',
        score:94,
        favsub:'imp',
    }
    ,
    {
        id:5,
        name:'oajan',
        score:80,
        favsub:'omp',
    },
];

// function sayname(name){
//     console.log(name);
// }
