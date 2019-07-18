import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as path from "https://deno.land/std/fs/path.ts";
import { readFile, writeFile } from "../../mod.ts";
import { __ } from "https://deno.land/x/dirname/mod.ts";
const { __dirname } = __(import.meta);

test(async function testReadFile() {
  const result = await readFile(path.resolve(__dirname, "./test.txt"));
  assertEquals("hello world", result);
});

test(async function testwriteFile() {
  await writeFile("hello async-fs!", path.resolve(__dirname, "./test.txt"));
  const result = await readFile(path.resolve(__dirname, "./test.txt"));
  assertEquals("hello async-fs!", result);
  await writeFile("hello world", path.resolve(__dirname, "./test.txt"));
})

runIfMain(import.meta);
