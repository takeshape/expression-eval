import jsep from 'jsep';
declare type operand = number | string;
declare type unaryCallback = (a: operand) => operand;
declare type binaryCallback = (a: operand, b: operand) => operand;
declare interface EvaluateOptions {
    implicitOptionalChaining?: boolean;
}
declare function evaluate(_node: jsep.Expression, context: object, options?: EvaluateOptions): any;
declare function evalAsync(_node: jsep.Expression, context: object, options?: EvaluateOptions): Promise<any>;
declare function compile(expression: string | jsep.Expression): (context: object, options: EvaluateOptions) => any;
declare function compileAsync(expression: string | jsep.Expression): (context: object, options: EvaluateOptions) => Promise<any>;
declare function addUnaryOp(operator: string, _function: unaryCallback): void;
declare function addBinaryOp(operator: string, precedence_or_fn: number | binaryCallback, _function: binaryCallback): void;
export { jsep as parse, evaluate as eval, evalAsync, compile, compileAsync, addUnaryOp, addBinaryOp };