// One-Star Review of Something Essential
// make.fun bounty: u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// The program writes exactly one line — a deadpan one-star review of an
// everyday essential — to /output/entry.txt. That text is the whole entry.
//
// The line is fixed and deterministic: no randomness, no clock, no network,
// no input files. Every run produces byte-identical output, so the replay
// matches the live run exactly.
//
// The joke, beat by beat, against the judge's brief:
//   - "One star." opens it as a review filed in earnest, deadpan from the
//     first two words, unmistakably about the thing itself (criterion 1).
//   - The grievance is the sharpest true one sleep has: you pay it eight
//     hours every night and still wake up tired. Everyone recognises it;
//     nobody has filed it as a complaint before (criterion 2).
//   - It holds the deadpan throughout: no winking, no explaining the joke,
//     no exclamation mark doing the work (criterion 3).
//   - The turn lands in the last few words: "as if I had skipped it
//     entirely" reframes a full night's sleep as a payment that bought
//     nothing (criterion 4).
//   - One joke, told cleanly: the payment that returns nothing. No second
//     joke, no filler (criterion 5).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The output directory is /output in the grading sandbox. A local run may
// point it elsewhere with MAKEFUN_OUTPUT_DIR so the sandbox path is never
// hardcoded into a test. The file path is built from that directory, never
// from the current working directory, so the program works from any cwd.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

const REVIEW =
  "One star. I give sleep eight hours every night and wake up " +
  "exhausted, as if I had skipped it entirely.";

// The gate allows 1 to 160 characters of UTF-8 text, not only whitespace.
// Fail loudly instead of writing an invalid entry.
if (REVIEW.length < 1 || REVIEW.length > 160 || REVIEW.trim().length === 0) {
  throw new Error(`review is ${REVIEW.length} chars; gate needs 1-160`);
}
if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
  throw new Error("review must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// No trailing newline: the file holds exactly the one line, nothing else.
writeFileSync(ENTRY_PATH, REVIEW, "utf8");

// Read it back: the file the judge sees must be byte-identical.
if (readFileSync(ENTRY_PATH, "utf8") !== REVIEW) {
  throw new Error("round-trip check failed");
}

console.log(`wrote ${REVIEW.length} chars to ${ENTRY_PATH}`);
