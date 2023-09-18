export function basic_ops(lhs,  operator, rhs) {
    switch (operator) {
        case "+":
            return (lhs << 0) + (rhs << 0);
    
        case "-":
            return (lhs << 0) - (rhs << 0);
    
        case "x":
            return (lhs << 0) * (rhs << 0);
    
        case "/":
            return (lhs << 0) / (rhs << 0);
    
        case "^":
            return (lhs << 0) ** (rhs << 0);
    
        case "\\":
            return (lhs << 0) ** (1 / (rhs << 0));
    
        default:
            return NaN;
    }
}

export function trig_ops(func, ang) {
    switch (func) {
        case "cos":
            return Math.cos(ang);
    
        case "sin":
            return Math.sin(ang);
        
        case "tan":
            return Math.tan(ang);
    
        default:
            return NaN;
    }
    
}