// try the basic operators.
// syntax: operandLHS operator operandRHS

switch (process.argv[3]) {
    case "+":
        console.log((process.argv[2] << 0) + (process.argv[4] << 0));
        process.exit(0)

    case "-":
        console.log((process.argv[2] << 0) - (process.argv[4] << 0));
        process.exit(0)

    case "x":
        console.log((process.argv[2] << 0) * (process.argv[4] << 0));
        process.exit(0)

    case "/":
        console.log((process.argv[2] << 0) / (process.argv[4] << 0));
        process.exit(0)

    case "^":
        console.log((process.argv[2] << 0) ** (process.argv[4] << 0));
        process.exit(0)

    case "\\":
        console.log((process.argv[2] << 0) ** (1 / (process.argv[4] << 0)));
        process.exit(0)

    default:
        break;
}

// if default breaks then input syntax is either wrong or trigonometric
// let's handle the trig.
// syntax: operator of operand unit : unit default is rads

let ang =
    process.argv[5] === "rad"
        ? process.argv[4] << 0
        : (process.argv[4] << 0) * (Math.PI / 180);

switch (process.argv[2]) {
    case "cos":
        console.log(Math.cos(ang))
        process.exit(0)

    case "sin":
        console.log(Math.sin(ang))
        process.exit(0)
	
	case "tan":
		console.log(Math.tan(ang))
		process.exit(0)

    default:
        break;
}

// if default breaks, then input syntax is wrong. Let the user know and exit 1.
console.log("Input syntax is wrong!")
process.exit(128)