import tableOfContents from "./toc.ts";
import { join } from "https://deno.land/std@0.190.0/path/mod.ts";
import { contentType } from "$fresh/src/server/deps.ts";
import type { TopLevelEntry } from "site/docs/toc.ts";

const mainCreateFilesFromToc = async () => {
  for (const content of tableOfContents) {
    if (content.slug) {
      const path = `./${content.slug}`;
      const stat: { isDirectory: boolean } = await Deno.stat(path).catch(
        (_) => ({ isDirectory: false }),
      );
      let isCreated = false;
      if (!stat.isDirectory) {
        isCreated = await Deno.mkdir(path)
          .then(() => true)
          .catch(() => false);
      }
      if (!content.children && !isCreated) {
        await Promise.all([
          Deno.create(`${join(path, "en.md")}`),
          Deno.create(`${join(path, "pt.md")}`),
        ]);
        await Deno.writeTextFile(
          join(path, "en.md"),
          `---
  description: TODO
  since: 1.0.0
  ---`,
        );
        await Deno.writeTextFile(
          join(path, "pt.md"),
          `---
  description: TODO
  since: 1.0.0
  ---`,
        );
        continue;
      }
    } else if (content.children) {
      for (const children of content.children) {
        const path = `./${children.slug}`;
        const stat: { isDirectory: boolean } = await Deno.stat(path)
          .catch(
            (_) => ({ isDirectory: false }),
          );
        if (!stat.isDirectory) {
          if (
            await Deno.mkdir(path, { recursive: true })
              .then(() => true)
              .catch(() => false)
          ) {
            await Promise.all([
              Deno.create(`${join(path, "en.md")}`),
              Deno.create(`${join(path, "pt.md")}`),
            ]);

            await Deno.writeTextFile(
              join(path, "en.md"),
              `---
  description: TODO
  since: 1.0.0
  ---`,
            );
            await Deno.writeTextFile(
              join(path, "pt.md"),
              `---
  description: TODO
  since: 1.0.0
  ---`,
            );
          }
        }
      }
    }
  }
};

const checkUnsuedDocFile = async () => {
  const processChildren = (entry: TopLevelEntry): string[] =>
    [
      entry.slug ?? "",
      ...(entry.children && entry.children.map(processChildren) ||
        ([] as string[])).flat(),
    ].filter(Boolean);

  const slugs = tableOfContents.map(processChildren).flat();

  const processDir = async (dir: string, prefix: string): Promise<string[]> => {
    const docFiles = await Deno.readDir(dir);
    const notUsedDirs = [] as string[];
    for await (const file of docFiles) {
      if (file.isFile) {
        const slug = dir.slice(prefix.length);
        if (!slugs.includes(slug) && !notUsedDirs.includes(dir)) {
          notUsedDirs.push(dir);
        }
      } else {
        notUsedDirs.push(...await processDir(dir + "/" + file.name, prefix));
      }
    }
    return notUsedDirs;
  };
  const processAllFiles = (dir: string) => processDir(dir, dir + "/");
  console.log(await processAllFiles("./docs"));
};

const generateCSVFromTOC = async () => {
  const process = (entity: TopLevelEntry[]) => {
    const data = [] as string[];
    for (let i = 0; i < entity.length; i++) {
      const children = entity[i].children;
      if (children) {
        data.push(...process(children));
      }
      if (entity[i].slug) {
        data.push(
          [
            "https://www.deco.cx/docs/pt/" + entity[i].slug,
            entity[i].title["pt"],
            "https://www.deco.cx/docs/en/" + entity[i].slug,
            entity[i].title["en"],
          ].join(";"),
        );
      }
    }
    return data;
  };

  // generate a CSV with url;title;url_en;title_en
  console.log("url;title;url_en;title_en");
  process(tableOfContents).toSorted().map((item) => console.log(item));

  // check if there is any file not used
};

if (import.meta.main) {
  const arg = Deno.args[0];

  if (arg === "generateCSV") {
    generateCSVFromTOC();
  } else if (arg === "createFiles") {
    mainCreateFilesFromToc();
  } else if (arg === "checkFiles") {
    checkUnsuedDocFile();
  } else {
    console.log(
      "Invalid argument. Please specify 'generateCSV' or 'createFiles'.",
    );
  }
}
