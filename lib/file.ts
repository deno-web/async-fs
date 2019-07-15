export async function readFile(filePath: string) {
  try {
    const bytes = await Deno.readFile(filePath);
    const text = new TextDecoder().decode(bytes);
    return text;
  } catch (err) {
    throw new Error('Path Error!')
  }
}

export async function writeFile(encodeData: string, filePath: string) {
  const data = new TextEncoder().encode(encodeData);
  await Deno.writeFile(filePath, data);
}
