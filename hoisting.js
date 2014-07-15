// Calling it before it's defined, but that's okay because
// function declarations are "hoisted" to the top of the file
sayHi();

function sayHi() {
  console.log('Hi!');
}

// Function expressions are *not* hoisted, so this blows up
sayHello();

var sayHello = function() {
  console.log('Hi!');
};
