function higherOrder1(fn) {
	if (fn() === true) {
		console.log('The function returns true');
	} else {
		console.log('IT WAS FALSE');
	}
}

higherOrder1(function() {
	return true;
});
function test() {
	return false;
}
higherOrder1(test);

function higherOrder2() {
	return function() {
		return 'You called the function';
	};
}

const innerFunction = higherOrder2();
innerFunction();

higherOrder2()();

function higherOrder3(num) {
	return function() {
		console.log(num);
	};
}

const four = higherOrder3(4); // -> return a function
four();
four();
const five = higherOrder3(5);
five();
four();
// higherOrder3(4)();

function higherOrder4(fn) {
	return function(num) {
		return fn(num);
	};
}

function greaterThan3(num) {
	return num > 3;
}

const inBetween = higherOrder4(greaterThan3);
/*
inBetween === function(num) {
  return greaterThan3(num)
}
*/
inBetween(5);
inBetween(1);

function add(a, b) {
	return a + b;
}

function same(a) {
	return a;
}

/* 
higherOrder5 takes in a callback function
and returns a function that would return
the result of calling that callback function
with the arguments passed to the returned 
function
*/
function higherOrder5(fn) {
	return function(...args) {
		console.log('args', args);
		return fn(...args);
	};
}

const addInBetween = higherOrder5(add);
const sameInBetween = higherOrder5(same);

addInBetween(2, 3); // --> 5
sameInBetween(3); // --> 3

/*
  arrayHigherOrder takes a callback and an
  array and it will call that callback on
  every element in the array
*/
// function arrayHigherOrder(log, [5,6,7,8]) {
//   for (let val of [5,6,7,8]) {
//     log(val);
//   }
// }
function arrayHigherOrder(array, fn) {
	for (let i = 0; i < array.length; i++) {
		fn(array[i], i, array);
	}
}

function log(value) {
	console.log('your value is ' + value);
}

const array = [5, 6, 7, 8];

arrayHigherOrder(array, log);