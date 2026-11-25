import * as fs from "node:fs";
import * as path from "node:path";

// The Long Roast: Lawmakers and the File They Cannot Convert: one satirical
// sentence roasting lawmakers who regulate AI but cannot convert a file.
const roast =
  "The senator who spent a year writing the law to govern artificial intelligence still calls his bill FINAL_final_v2, because the Export to PDF button is where his authority ends.";

// Self-check against the competition gate before writing: the entry must
// be one non-empty sentence of 1-320 characters. Fail loudly instead of
// writing an invalid entry.
const codePoints = [...roast].length;
if (roast.trim().length === 0) {
  throw new Error("roast must not be empty or whitespace-only");
}
if (roast.includes("\n") || roast.includes("\r")) {
  throw new Error("roast must be a single sentence");
}
if (codePoints < 1 || codePoints > 320) {
  throw new Error(`roast must be 1-320 characters, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), roast, "utf8");
