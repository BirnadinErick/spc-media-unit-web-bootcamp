const input = process.argv[2] + " " + process.argv[3] + " " + process.argv[4] 

console.log(input)

switch (process.argv[3]) {
    case "+":
        console.log((process.argv[2]<<0) + (process.argv[4]<<0) )
        break;

    default:
        break;
}