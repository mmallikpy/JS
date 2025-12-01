# Day 10 Tasks complete!

## 1. What will be the output of the following code and why?
```js
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
```
## Answer is :
```js
Bob
```
## 2. What is the mistake in the code below?
```js
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);
```
## Answer is :
```js
The mistake is that in the global scope, we declare let instead of var. But in a video you recommend that you don't use the var reason because it can overlap the variable name.
```
## 3. Create a function with a nested function and log a variable from the parent function.

## Answer is :
```js
Ans:-
function outer(){
  let name = 'Test name'
  function inner(){
    console.log(name)
  }
  inner()
}
outer()
```

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

## Answer is :
```js
No, we can't access the variable.
```

## 5. Write a function that tries to access a variable declared inside another function.

## Answer is :
```js
function a(){
  let varA = 'Function a'
}

function b(){
  let varB = 'Function b'
  console.log(varA)
}

b()
```


## 6. What will be the output and why?
```js
console.log(a);
let a = 10;
```

## Answer is :
```js
Output = Cannot access 'a' before initialization
Reason, we assign variable before console log.
```

## 7. Where is the `age` variable accessible?
```js
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);
```

Options:
- A: In Global
- B: Only inside showAge
- C: It will cause an error
- D: None of the above

## Answer is :
```js
B: Only inside showAge
```

## 8. What will be the output and explain the output?
```js
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

## Answer is :
```js
output will "Hi". Reason Scope Chain, If it's not found the variable inside this Function then it's search upper Function.
```



## 9. What will be the output and why?
```js
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
```
## Answer is :
```js
output will "Inner". Reason Scope chain. It's in same Scope.
```


## 10. What will be the output and why?
```js
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
```

## Answer is :
```js
Output are -1, -2,
Reason  count reduce the value 1 every time. Hear we call the function 2 times.
```
