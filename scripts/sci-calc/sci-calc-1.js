import { exit, argv } from "process";
import {log} from "console"
import { basic_ops, trig_ops } from "./ops.js";

// try the basic operators.
// syntax: operandLHS operator operandRHS
const basic_op_result = basic_ops(argv[2], argv[3], argv[4])

if (!isNaN(basic_op_result)) {
    log(basic_op_result)
    exit()
}

// if default breaks then input syntax is either wrong or trigonometric
// let's handle the trig.
// syntax: operator of operand unit : unit default is rads

// first convert to radians as std-lib requires in rads
let ang =
    process.argv[5] === "rad"
        ? process.argv[4] << 0
        : (process.argv[4] << 0) * (Math.PI / 180);

const trig_op_result = trig_ops(argv[2], ang)

if (!isNaN(trig_op_result)) {
    log(trig_op_result)
    exit()
}
        

// if default breaks, then input syntax is wrong. Let the user know and exit
console.log("Input syntax is wrong!")
process.exit(128)