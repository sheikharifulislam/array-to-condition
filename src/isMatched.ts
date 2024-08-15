import { Expression, Operator } from ".";
import runStatement from "./runStatement";

function isMatched(conditions) {
    const result = conditions.map((condition: [Expression, Operator, Expression]) =>
        Array.isArray(condition) ? runStatement(condition) : condition
    );
    return runStatement(result);
}

export default isMatched;
