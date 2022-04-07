// Q1 : Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

let parent = {
    eat : 'true',
    tall : 'true',
    teach : 'true',
    walk : function() {
        console.log('YES..!!!')
    }
}

let child = {
    food : 'true',
    school : 'true'
}

child.__proto__ = parent                                     
console.log(child.eat)                 
console.log(child.tall)                
child.walk()                           
console.log('child',child)                                   



// Q2 : Write code to explain prototype chaining.

// let obj = {
//     name : 'kumar',
//     city : 'Mumbai',
//     job : 'true',
//     moves : function() {
//         console.log('Moves Object')
//     }
// }

// let obj2 = {
//     name : 'shanth',
//     walk : 'true'
// }

// let obj3 = {
//     eat : 'true',
//     talk : 'true'
// } 

// obj2.__proto__ = obj
// obj3.__proto__ = obj

// console.log(obj2.name)       
// console.log(obj2.job)        

// console.log(obj3.eat)        
// console.log(obj3.city)       

// obj2.moves()                 
// obj3.moves()                 



// Q3 : Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

let array = [ 23, 57, 25, 7, 10, 103, 111, 117, 333 ]
let sum = array.reduce((acc, curr) => acc + curr, 0)
console.log(sum)                                                   



// Q4 : Write a JavaScript function to retrieve all the names of object's own and inherited properties.

let obj1 = {
    a : 'true',
    b : 'true',
    c : 'true'
}

let obj2 = {
    d : 'true',
    e : 'true'
}

let obj3 = {
    f : 'true'
}

obj2.__proto__ = obj1            

console.log(obj2.hasOwnProperty('a'))             // false
console.log(obj2.hasOwnProperty('d'))            // true
console.log(obj3.hasOwnProperty('b'))            // false
console.log(obj3.hasOwnProperty('f'))              // true