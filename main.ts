import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A robot vacuum explains the spot it missed: its cliff sensor, and an old fear.
const excuse = "My cliff sensor flagged that rug as a sheer drop last March, and frankly, I'm not ready to go back there.";

const limit = 140;
if ([...excuse].length > limit) throw new Error(`excuse is ${[...excuse].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), excuse);
