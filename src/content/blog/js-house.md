---
title: "Building a house called JS"
excerpt: "Let's learn JS by building a house."
publishDate: "2023-09-17T14:20:36.000Z"
image: "/blog/js-house.webp"
category: "js"
author: "b"
tags: [js, basics]
---

Ever wondered how a house is built? From the ground up. So, let's do the same
with our Javascript(JS) house. But there are some requisites before construction.
Those are

- a ground to build upon
- construction crew => this is YOU!
- tools

Let's get detour, thenafter build the house, OK?

## Runtimes (Engines): a ground to build upon

Just like how we need a land to build upon, we need some land to run JS. Since
JS is an *interpreted language* we need an interpreter, a runtime to be exact;
unlike compiled languges. Some of such runtimes are:

- [nodejs](https://nodejs.org/en)
- [bun](https://bun.sh/)
- [deno](https://deno.com/)
- [V8](https://v8.dev/)
- [Webkit](https://webkit.org/)

![A JS Construction Ground](/img/foundations-land.webp)

For compatibility with Windows users, we will use **nodejs** runtime for
development; and **V8** for prodiction and render.

> V8 is also the runtime that powers the JS in
> [chromium](https://www.chromium.org/) based browsers.

### Installing nodejs

Since most of you are windows users, you can download nodejs from official
website and use the installer to install. This bootcamp will use version `18`.

## IDE: tools we need

Integrated Developemnt Environment(IDE) is very opinioted topic in the community.
Since y'all are beginners, let's go with something well integrated into Windows,
the [Visual Studio Code(VSC)](https://code.visualstudio.com/download).
Nevertheless, you can follow along with your editor of choice.

We will further enhance the VSC to IDE from text-editor.

Now that we have the prerequisites, let's drill down to business.

---

## Laying the Foundations

As I told you in the [Introduction](/blog/intro), I assume you already have some
knowledge in Scratch.

![The Foundations](/img/foundations.webp)

IMO, foundations are just 3. The control structures and primal data structures.
The control Structures are as such:

- Sequencial
- Conditional
- Iteration

### Sequencial

This does not have any particulars. All you need to know is that the interpreter
reads top->bottom & right->left.

![Interpreter Reading Flow](/img/interpreter-flow.svg)

### Conditional

This structure will introduce branches in our program.

![Conditions of Scratch vs. JS](/img/vs-cond.webp)

### Iteration

Soup of Sequential & Coditional. Best put, it is a block of sequential instructions
to run until a/some conditions is/are met. JS has quite handful of them, but
primal are:

1. [`while`](https://www.w3schools.com/js/js_loop_while.asp)
2. [`for`](https://www.w3schools.com/js/js_loop_for.asp)

![Iterations Scratch vs. JS](/img/vs-loop.webp)

#### while loop

```javascript
while (/* condition */) {
    /* sequence of intructions */
}
```

#### for loop

```javascript
for (i=0; i<N; i++;) {
    /* sequence of intructions */
}
```

### Data structures

Primally we have:

- numbers: `2003` or `19.05`
- characters: `'b'`
- strings: `"Birnadin"`

For detailed and better explanation please go through
[this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_structures_and_types).

---

## Ground Floor

Building upon our foundations, let's construct the ground floor. There are two
kinds of [programing paradigm](https://www.geeksforgeeks.org/introduction-of-programming-paradigms/).
Just of our foundations will belong to procedural. But, personally I love
functional programming with a zest of procedural.

![functional programming meme](/img/func-meme.webp)

### Functions

A collection of reusable code is grouped and then labeled; this procedure
is called *function*.

```javascript
function funcName(/* func args */) {
    /* func body */
}

funcName(/* func parameters */); calling a function
```

Above code snippet shows how a function is declared and then called. Apart from
this basic syntax,
[functions can be declared otherwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

### Collections

We saw primal data structures help us give values in our programs some context.
But just these would not suffice real-world applications. Thus we need
collections:

- [indexed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- [keyed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)

#### Indexed Collections

Most common is array. This is just a sequential predefined space in memory that
can hold same type of variables and literals.

```javascript
let b = [2003, 5, 19];
let e = ["b", "e"];

let i = e[0] // == "b"
let j = b[2] // == 19
```

> Here the `let` keyword is how we declare (might initiate) a variable.
> Other construct is `const` which makes a variable to have constant value
> at runtime.

### Keyed Collections

Using hash functions, a value can be keyed using predefined keys at the creation
time to be queried upon.

```javascript
const sayings = new Map();

sayings.set("dog", "woof");
sayings.get("dog"); // woof

// deleting a record
sayings.delete("dog");
sayings.has("dog"); // false

sayings.clear();
sayings.size; // 0
```

Further more, a variant of `for` can be used to iterate over a `Map` as well.

```javascript
for (const [key, value] of sayings) {
  console.log(`${key} => ${value}`);
}
```

---

## First Floor

Now with the knowledge we assimilated, let's move forward and talk about...

- I/O
- Modules

There are 2 other things I would like to add here, but for them we need to study
about Promises and `async/await`. So, let's put them in the attic and come back
to them later!

### Input and Output (IO)

You might be familiar with the [Von Neuman Architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture)
that lays the groundwork for all the softwares ever witten (probably).

![The Von Neumann Arch *graphic from Wikipedia*](/img/vonneumann.svg)

Now our focus is in *Input* and *Output* devices. Well know way of output to
stdout is by `console.log` in JS. This function is found both in browser
environment and nodejs. Try it for yourself.

Write the program

```js
console.log("Hello!"); // feel free to change the prompt!
console.log("Goodbye!"); // feel free to change the prompt!
```

Now execute the script with nodejs and see for yourself that an output is
given in the stdout (mostly your terminal window). This is (somewhat)analogous
to following Scratch script.

![Scratch Output](/img/s-say.png)

OK, but how do we take an input to the program, if the environment is nodejs?

To keep things nice and tidy, let's qorry about commandline arguments. We will
cover the stdin when we are done with **async/await**. Commandline arguments are
just the strings you passed into terminal when invoking a command. In nodejs,
we can access this vector using `process.argv` object. So when executing a
script like this...

```bash
node io.js erick spcmediaunit webbootcamp
```

In runtime, the `process.argv` would be...

```js
process.argv === [
    "node.exe",
    "io.js",
    "erick",
    "spcmediaunit",
    "webbootcamp"
] // True

process.argv[2] === "erick" //True
```

> `process.argv` is **read-only**, you can't assign values at runtime.

First and second values in the array are interpreter and the script itself.
This is because the argv is originally given to node.exe by the OS and propogated
downstream. So be careful to remind this under your consideration.

### Modules

As our project grows, single-file script will be tedious and hard to maintain
by small-scale team. To countermeasure these, we have
[`modules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
Modules in the sense, we can divide a single-file script into multiple files,
and import code blocks as per need in one another.

In a nodejs environment, we use `require` keyword...

```js
const myMod = require(/* relative path to the module */)
```

Essentially what this does, is take the script and execute it then only to return
the final artefact and assign it to the `myMod` at runtime.

> We will use another flavor of such import in future!

---

## Wrap up

We are not done yet. But contiguous theory will bore you to death; rest will
be continued later on. For now, let's just make a
[dead-simple scientific calculator](/blog/sci-calc-1)
with what we have learned so far.

Have a great time tinkering!

BirnadinE.
