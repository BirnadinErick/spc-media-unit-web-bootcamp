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

---

Now that we have the prerequisites, let's drill down to business.

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

![Interpreter Reading Flow]()

### Conditional

This structure will introduce branches in our program.

![Conditions of Scratch vs. JS]()

### Iteration

Soup of Sequential & Coditional. Best put, it is a block of sequential instructions
to run until a/some conditions is/are met. JS has quite handful of them, but
primal are:

1. [`while`](https://www.w3schools.com/js/js_loop_while.asp)
2. [`for`](https://www.w3schools.com/js/js_loop_for.asp)

![Iterations Scratch vs. JS]()

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

- numbers
- characters
- strings
- floats

For detailed and better explanation please go though
[this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_structures_and_types).

---

## Ground Floor

Building upon our foundations, let's construct the ground floor. There are two
kinds of [programing paradigm](https://www.geeksforgeeks.org/introduction-of-programming-paradigms/).
Just of our foundations will belong to procedural. But, personally I love
functional programming with a zest of procedural.

![functional programming meme]()

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
- File handling
- The DOM
