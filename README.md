# JavaScript Functions

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), along with objects, are one of the most important core concepts in JavaScript.

## Defining Functions

```js
function sayHi() {
  console.log('Hi!');
}

sayHi();
```

That wasn't so bad. Replace the `function` with a `def` and you'd almost have a Ruby method definition. Note the parentheses are required, not only on the function call, but also on the function definition, even if there are no arguments.

Let's finally find out what the deal is with that. What if we leave off the parens?

```
> function sayHi() { console.log('Hi!'); }
undefined
> sayHi;
[Function: sayHi]
> typeof sayHi;
'function'
```

If we just refer to `sayHi` without the parens, it is not called. And furthermore, the console is telling us that `sayHi` is an object of type "function". We are referring to the function itself &ndash; and in JavaScript, functions are objects, just like everything else.

We can drive this point home by using a different way of defining a function:

```js
var sayHello = function() {
  console.log('Hello!');
};

sayHello();
```

This makes it very clear that a function is just another kind of object like strings, arrays, etc. When we define a function, we're really declaring a variable with that name, and assigning a *function object* to it.

Anything we could do with a string or a number, we can do with a function:

```
> var sayHi = function() { console.log('Hi!'); }
undefined
> var anotherHi = sayHi;
undefined
> anotherHi();
Hi!
```

Having functions as just another type of object, and being able to pass them around using variables, turns out to be the key to writing almost anything worthwhile in JavaScript, since the language is otherwise very minimal.

### Sidebar

There is actually a difference between the two ways of defining a function. The first is called a "function declaration" and is subject to something called "function hoisting". The second is called a "function expression" and is not. Check out `hoisting.js` for a demonstration of this.

#### Super Sidebar

This sort of thing is possible in Ruby too:

```
> def say_hi; puts 'Hi!'; end
 => :say_hi
> hi_method = method(:say_hi)
 => #<Method: Object#say_hi>
> hi_method.call
Hi!
 => nil
```

We have to jump through an extra hoop to get the actual object reference, but in most programs this sort of thing isn't needed: Since we have `send` and `Symbol#to_proc` and other fancy stuff, we can usually just refer to methods using symbols or strings that match up with their names.

