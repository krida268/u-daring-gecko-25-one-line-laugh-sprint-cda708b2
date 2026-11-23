// One-Line Laugh Sprint — a program that writes a single original funny line
// about everyday life to /output/entry.txt.
//
// The line has to land on a first read: an everyday setup (a phone's
// autocorrect), a small wordplay twist, and a payoff in the last few words.
// It is a fixed string on purpose — the entry is judged on the writing, so
// the program's job is to deliver exactly that line, byte for byte, every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone autocorrected 'I'm on my way' to 'I'm on my weigh,' which is honestly the most accurate thing it's ever said.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // The gate only accepts 1 to 200 characters of UTF-8 text, so refuse
  // loudly instead of shipping a line the gate would throw away.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  // /output is a mount point in the grader sandbox: never delete the
  // directory itself, only create it if missing and write the file.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
  console.log(`Wrote ${LINE.length} characters to ${OUT_FILE}`);
}

main();
