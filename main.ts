// The Robot Vacuum's Best Excuse.
// Writes one deadpan excuse, in the vacuum's own voice, to /output/entry.txt.
// Node 22 stdlib only, deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My cliff sensor saw the rug fringe and reported the floor as lava. I don't argue with lava.";

function main(): void {
  // Gate: the entry must be 1-140 characters of real text, never blank,
  // and a single line, so the judge reads it as one excuse.
  const chars = [...EXCUSE].length;
  if (chars < 1 || chars > 140 || EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
    throw new Error(`excuse must be one line of 1-140 characters, got ${chars}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EXCUSE, "utf8");
}

main();
