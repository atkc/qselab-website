import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const expectedUndergraduates = [
  "Aliyev",
  "Grace Lee",
  "Khadijah",
  "Kristoffer Videl Wijono",
  "Qi Yuan Yu",
  "Surya Nayar",
  "Vivekan",
  "Yong Le Lee",
];

test("static People section renders every announced undergraduate once", async () => {
  const html = await readFile(path.join(root, "out", "index.html"), "utf8");
  const section = html.split('<section id="people"')[1]?.split("</section>")[0];
  assert.ok(section, "People section is missing from the exported homepage");

  const cards = [...section.matchAll(/<article class="person-card">([\s\S]*?)<\/article>/g)].map(([, markup]) => ({
    name: markup.match(/<h3>([^<]+)<\/h3>/)?.[1],
    role: markup.match(/<p class="person-role">([^<]+)<\/p>/)?.[1],
    markup,
  }));
  const undergraduates = cards.filter((card) => card.role === "Undergraduate");

  assert.deepEqual(undergraduates.map((card) => card.name), expectedUndergraduates);
  for (const { name, markup } of undergraduates) {
    const image = markup.match(/<img\b[^>]*\bsrc="([^"]+)"/);
    if (image) {
      assert.ok((await stat(path.join(root, "out", image[1].replace(/^\//, "")))).isFile(), `${name} has a missing portrait`);
    } else {
      assert.match(markup, /class="person-photo person-photo--empty"/, `${name} needs a portraitless card`);
      assert.match(markup, /<span aria-hidden="true">[^<]+<\/span>/, `${name} needs a text initial`);
    }
  }
});
