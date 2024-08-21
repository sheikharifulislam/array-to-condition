import { Expression, Operator, TODO } from ".";
import runStatement from "./runStatement";

function isMatched(conditions: TODO) {
    const result = conditions.map((condition: [Expression, Operator, Expression]) =>
        Array.isArray(condition) ? runStatement(condition) : condition
    );
    return runStatement(result);
}

export default isMatched;
