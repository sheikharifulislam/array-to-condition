import isMatched from "./isMatched";

type LogicalOperator = "===" | "!==" | "==" | "!=" | ">" | "<" | ">=" | "<=" | "||" | "&&";

type BitwiseOperator = "&" | "|" | "^" | "<<" | ">>" | ">>>";
export type Expression = string | number | boolean;
export type Operator = LogicalOperator | BitwiseOperator;
export type Condition = [Expression, Operator, Expression];
export type TODO = any;

function arrayToCondition(conditions: TODO) {
    const matches = isMatched(conditions);
    return { matches };
}

export default arrayToCondition;
