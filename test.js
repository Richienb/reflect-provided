import test from "ava"
import reflectProvided from "."

test("main", (t) => {
    t.is(reflectProvided(), undefined)
    t.is(reflectProvided("Hello World!"), "Hello World!")
    t.deepEqual(reflectProvided("Hello World!", "A second argument"), ["Hello World!", "A second argument"])
})
