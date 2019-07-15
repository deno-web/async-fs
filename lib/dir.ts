export async function readDir(dirPath: string) {
  const rs = await Deno.readDir(dirPath);
  return rs;
}

export async function writeDir(dirPath: string) {
  const result = await Deno.mkdir(dirPath);
  return result;
}
