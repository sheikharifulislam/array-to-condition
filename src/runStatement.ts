import { Expression, Operator } from ".";
import compare from "./compare";

function runStatement(conditions: [Expression, Operator, Expression]) {
    if (conditions.length % 2 === 0) {
        throw "Provided condition is not valid!";
    }

    let condition = conditions.slice(0, 3) as [Expression, Operator, Expression];

    const result = compare(condition);

    const next = [result, ...conditions.slice(3)];
    if (next.length >= 3) {
        // @ts-expect-error i will fix later
        return runStatement(next);
    }
    return result;
}

export default runStatement;
