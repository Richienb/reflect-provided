/**
 * Reflect the provided arguments.
 * @param args The arguments to reflect.
 * @example
 * ```
 * const reflectProvided = require("reflect-provided");
 * reflectProvided("Hello World!")
 * //=> "Hello World!"
 *
 * reflectProvided("Hello World!", "A second argument")
 * //=> ["Hello World!", "A second argument"]
 * ```
*/
declare function reflectProvided<T>(args: T): T;
declare function reflectProvided<T>(...args: T): T;

export = reflectProvided;
