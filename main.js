// let x = myFunction(3,4)
// console.log(x)

// function myFunction(a, b){
//     return a * b;
// }

// function btnColorChange(){
//     let a = 5*10
//     return a
// }

// let a = "bakdj  fpiosenrk dnfiosejhrf"

// console.log(a.toUpperCase())

// let a = ['aa', 'ba', 'ca'];
// let b = ['ab', 'bb', 5];
// let output = typeof(a)
// document.getElementById("demo").innerHTML = output


// let for_each_array = ['a', 'b', 'c', 'd']

// for_each_array.push(for_each_array[9]='F')
// console.log(for_each_array)

// Map function

// var numbers = [1,2,3,4,5,6];
//
// var result = numbers.map((num) => {
//     return 2 * num;
// });
// console.log(result);
// console.log()
//
//
//
// let user = "Alice";
//
// function outer() {
//     function inner() {
//         console.log(user);
//     }
//     let user = "Bob";
//     inner();
// }
//
// outer();
//
//
// let total = 0; // Global, bad practice,
//
// function add(num) {
//     total += num;
// }
//
// add(5);
// add(10);
// add(10);
// console.log(total);
//
//
// function outer(){
//   let name = 'Test name'
//   function inner(){
//     console.log(name)
//   }
//   inner()
// }
// outer()


// function outer(){
//
//   function inner(){
//     let name = 'Test name 2'
//   }
//   inner()
//   console.log(name)
// }
// outer()

// function a(){
//   const varA = 'Function a'
// }
//
// function b(){
//   let varB = 'Function b'
//   console.log(varA)
// }
//
// b()

// function showAge() {
//     let age = 25;
//     console.log(age);
// }
//
// showAge()
// console.log(age);

// let message = "Hello";
//
// function outer() {
//     let message = "Hi";
//
//     function inner() {
//         console.log(message);
//     }
//
//     inner();
// }
//
// outer();

// let x = "Global";
//
// function outer() {
//     let x = "Outer";
//
//     function inner() {
//         let x = "Inner";
//         console.log(x);
//     }
//
//     inner();
// }
//
// outer();


// function counter() {
//     let count = 0;
//     return function () {
//         count--;
//         console.log(count);
//     };
// }

// const reduce = counter();
// reduce();
// reduce();


// function testClosure() {
//   let x = 10;
  
//   return function () {
//     return x * x;
//   };

// }
// console.log(testClosure()());


// const button_click = document.getElementById('buttonForCount')
// function btnCounter(){
//     let count = 0;
//     return button_click.addEventListener('click', function () {
//         count++;
//         console.log(count);
//     });
// }
// btnCounter()


function multiplierValue(){
    return function innerMultiplier(val1, val2){
        result = val1 * val2
        console.log(result)
    }
}

let multiplierfunction = multiplierValue()
multiplierfunction(50, 5)

