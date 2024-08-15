import { Expression, Operator } from ".";

const compare = ([expression1, operator, expression2]: [Expression, Operator, Expression]) => {
    switch (operator) {
        case "===": {
            return expression1 === expression2;
        }
        case "!==": {
            return expression1 !== expression2;
        }
        case "==": {
            return expression1 == expression2;
        }
        case "!=": {
            return expression1 != expression2;
        }
        case ">": {
            return expression1 > expression2;
        }
        case "<": {
            return expression1 < expression2;
        }
        case ">=": {
            return expression1 >= expression2;
        }
        case "<=": {
            return expression1 <= expression2;
        }
        case "||": {
            return expression1 || expression2;
        }
        case "&&": {
            return expression1 && expression2;
        }
        case "&":
        case "|":
        case "^":
        case "<<":
        case ">>":
        case ">>>": {
            if (typeof expression1 === "number" && typeof expression2 === "number") {
                switch (operator) {
                    case "&": {
                        return expression1 & expression2;
                    }
                    case "|": {
                        return expression1 | expression2;
                    }
                    case "^": {
                        return expression1 ^ expression2;
                    }
                    case "<<": {
                        return expression1 << expression2;
                    }
                    case ">>": {
                        return expression1 >> expression2;
                    }
                    case ">>>": {
                        return expression1 >>> expression2;
                    }
                }
            }
            throw new Error("Bitwise operators can only be used with numeric operands.");
        }
        default:
            return false;
    }
};

export default compare;
