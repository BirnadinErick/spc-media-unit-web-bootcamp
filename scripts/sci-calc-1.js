switch (process.argv[3]) {
    case "+":
        console.log((process.argv[2]<<0) + (process.argv[4]<<0) )
        break;

    case "-":
        console.log((process.argv[2]<<0) - (process.argv[4]<<0) )
        break;

    case "x":
        console.log((process.argv[2]<<0) * (process.argv[4]<<0) )
        break;

    case "/":
        console.log((process.argv[2]<<0) / (process.argv[4]<<0) )
        break;

    default:
        break;
}