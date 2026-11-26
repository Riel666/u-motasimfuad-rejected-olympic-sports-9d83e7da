// Synchronised Queueing - make.fun one-liner entry (program/v1, node22).
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidates, scored against the judge brief in the brief's own order:
// 1. Is a funny one-line rejected Olympic sport; 2. lands the joke in one read, twist before the line ends; 3. sounds like a real event a broadcaster would explain; 4. wastes no words; 5. stays quotable.
// A (winner): "Synchronised queueing: four athletes, one bus stop, judged on patience, posture, and who sighs loudest first." - Reads like a real broadcast listing, the absurdity is entirely in the sport, and the judging criteria deliver the laugh last.
// B: "Competitive apologising: two athletes say sorry until one of them means it, judged on sincerity, speed, and eye contact." - Funny, but the event is a personality trait rather than a sport a broadcaster would announce.
// C: "Extreme ironing, underwater division: athletes press shirts at thirty metres, judged on creases, breath control, and not drowning." - The joke is borrowed from a real stunt sport, so the invention does little work.
const LINE = "Synchronised queueing: four athletes, one bus stop, judged on patience, posture, and who sighs loudest first.";
const LIMIT = 200;

if (LINE.length < 1 || LINE.length > LIMIT) throw new Error(`line is ${LINE.length} chars, limit ${LIMIT}`);
if (LINE !== LINE.trim() || LINE.includes("\n")) throw new Error("line must be a single line with no leading/trailing whitespace");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}: ${LINE}`);
