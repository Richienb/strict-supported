import test from "ava"
import isNodeLater from "is-node-later"
import strictSupported from "."

test("main", (t) => {
    if (isNodeLater(">=4")) t.true(strictSupported)
    else t.false(strictSupported)
})
