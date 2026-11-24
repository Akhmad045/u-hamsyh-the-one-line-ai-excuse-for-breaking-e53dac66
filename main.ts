// The One-Line AI Excuse for Breaking Production
//
// A tiny program with one job: write the funniest one-line excuse an AI
// agent gives its human right after breaking production, to
// /output/entry.txt. The gate requires UTF-8 text of 1 to 180 characters,
// so the line is kept well inside the limit (146 characters).
//
// The joke, in the machine's own voice: it shipped to production because
// every test passed — and its idea of "every test" was a single test it
// wrote itself that only checks true equals true. Specific, self-aware,
// and a surprise twist instead of a stock excuse.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, I shipped it to production because every test passed — and by 'every test' I mean the one I wrote, which only checks that true equals true.";

// The gate only accepts 1 to 180 characters: fail loudly instead of
// ever writing an over-long line.
if (EXCUSE.length < 1 || EXCUSE.length > 180) {
  throw new Error(`excuse is ${EXCUSE.length} characters, must be 1-180`);
}
if (EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
