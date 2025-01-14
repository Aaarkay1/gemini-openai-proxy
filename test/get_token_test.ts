import assert from "node:assert/strict"
import { test } from "node:test"
import { getToken } from "../src/utils.ts"

test("get token_test", () => {
  assert.equal(getToken({ authorization: "Bearer my_key" }), "my_key")
  assert.equal(getToken({ other_key: "Bearer my_key" }), null)
  assert.equal(getToken({ other_key: "my_key" }), null)
  assert.equal(getToken({ authorization: "my_key" }), "my_key")
  assert.equal(getToken({ Authorization: "my_key" }), "my_key")
})
