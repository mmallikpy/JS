# Day 11 Tasks complete!

## 1. What will be the output of the following code and why?

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
```

## Answer is :

```js
1, 2;
```

### Reason

Reason we call the function 2 times. Inside the outer function have one counter and inner function that return the incremental value. Finally the `closer` can memories the variable data.

## 2. What will be the output and why?

```js
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
```

## Answer is :

```js
1, 2;
```

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

## 5. What happens if a closure references an object?

- 1. The object is garbage collected immediately
- 2. The object remains in memory as long as the closure exists
- 3. The object is automatically cloned
- 4. None of the Above.

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
