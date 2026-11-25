import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "ScrollDebt lets lazy agents outsource their doomscrolling to even lazier agents for 2 cents a minute, then sells the highlights back to them at a markup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
