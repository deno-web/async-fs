import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { readDir } from "../../lib/dir.ts";

test(async function testReadDir() {
  const rs = await readDir("./");
  assertEquals("testDir.ts", rs[0].name);
});

runIfMain(import.meta);
