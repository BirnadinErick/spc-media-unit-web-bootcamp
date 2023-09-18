---
title: "Scientific Calculator Part 1"
excerpt: "A dead-simple sientifuc calculator with vanilla JS"
publishDate: "2023-09-18T07:25:00.000Z"
image: "https://unsplash.com/photos/6Vc2hC21PFw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8c2NpZW50aWZpYyUyMGNhbGN1bGF0b3J8ZW58MHx8fHwxNjk0OTY3MTU4fDA&force=true&w=1920"
category: "projects"
author: "b"
tags: [js, project, cli]
---

## Requirements

Our calculator will do following mathematical operations:

1. Add/Subtract
2. Multiply/Divide
3. cos/sin/tan
4. Indices/Roots

Along with this, we have some rules also that every input should govern.

- Only one operation at a time
- Only 2 operands are allowed at maximum

## A Skeleton

In software engineering and business in common, you will come across a term
called Minimum Viable Product(*MVP*). Businesses use this version of their
service to validate an idea, a proof of concept (PoC) to be exact. Our MVP will
be a cli with an output from the given input. Let's do that.

### Echo Echo

![Echo Echo](https://media.tenor.com/b-_GN-z8dC0AAAAd/oliver10-ben10.gif)

You remember Echo Echo, right? Let's build an JS version of that.

```js
const input = process.argv[2] + " " + process.argv[3] + " " + process.argv[4] 

console.log(input)
```

Then execute the script like this...

```bash
node calc.js 2 + 2
```

...to get output like `2 + 2` in the stdout. Now that we are echoing, let's
evaluate the expression as well. How do we do that? How do we know what we should
do?

We can answer the latter using the 2nd argument. So let's change(brach-off) the
flow based on 2nd argument to the script. Though you can do chained `if-else` to
achieve the result, but allow me to introduce new conditional, `switch/case`.
By this way, we can reduce some boilerplate code.

```js
const input = process.argv[2] + " " + process.argv[3] + " " + process.argv[4] 
console.log(input)

// switch (variable to compare against) {
switch (process.argv[3]) {
    // a branch to execute when comparision matches
    case "+":
        console.log("Addition");
        break;

    default:
        break;
}
```

If you  executed previous command, then you will get `Addition` additionaly.
Now we can determine the action. Other necessary is the action itself. How do
we evaluate the expression? If you try, you will get `22` with following code...

```js
console.log(process.argv[2] + process.argv[4])
```

#### Casting

Since the context given to a variable changes as the type assigned to it changes,
adding to *strings* will **concatenate** the both. We need to *cast* those
strings to *numbers* so addition will result in numerical addition. There are
[numerous ways](https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript)
to cast in JS, but for starters `parseInt()` and `parseFloat()` is ok. I personally
prefer `<<0` as this is performant due to CPUs being icredible with *bit operations*.

```js
// snip for brevity
       console.log((process.argv[2]<<0) + (process.argv[4]<<0) )
// snip
```

Now your script should add two integers.

---

### Tasks

1. Try to implement other 3 basic mathematical operations
2. Read [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) and do the `cosine`
3. Find whether you can implement other 2 trigonometric operations as well.
4. Try the indices
5. Can you use 4th solution to solve the roots as well?

> Feel free to enforce new syntax to the input given or change the program
> entirely, YOUR IMAGINATION IS THE ONLY LIMIT!

We will discuss the solution on Wednesday, the September 20, 2023. Till then,
have a great time coding and discovering. See y'all.
