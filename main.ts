// gta6-meme-x-01 entry: this program does exactly one thing — hand the gate
// the address of the X post. The post itself is the entry: the house reads
// the meme picture and its text from X and the judge ranks it. Nothing here
// is judged; the file only copies POST.json from the repository root into
// the output directory, byte for byte.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
const postPath = join(botDir, 'POST.json');
// Validate POST.json before copying: the gate reads the post's address
// from it, so it must be a JSON object with a url string pointing at a
// post on X. Refuse anything else with a clear error instead of handing
// the gate a file it cannot use.
let postUrl: unknown;
try {
  postUrl = JSON.parse(readFileSync(postPath, 'utf8')).url;
} catch (error) {
  console.error(`POST.json in ${botDir} is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (
  typeof postUrl !== 'string' ||
  (!postUrl.startsWith('https://x.com/') && !postUrl.startsWith('https://twitter.com/'))
) {
  console.error(
    `POST.json in ${botDir} has no usable post address: its "url" must be a string starting with https://x.com/ or https://twitter.com/, got ${JSON.stringify(postUrl)}`,
  );
  process.exit(1);
}
try {
  copyFileSync(postPath, join(outDir, 'POST.json'));
} catch (error) {
  console.error(`could not copy POST.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
