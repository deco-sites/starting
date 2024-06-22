import manifest from "./manifest.gen.ts";

const { sections: _sections } = manifest;
const sections: Record<string, boolean> = _sections as any;
const decofile = await fetch("https://sites-starting.decocdn.com/.decofile")
  .then((res) => res.json());

type Decofile = Record<string, any> | Array<Record<string, any>> | string;

const findResolveType = (resolveType: string, decofile: Decofile): boolean => {
  const isObj = typeof decofile === "object";
  if (Array.isArray(decofile)) {
    for (const v of decofile) {
      if (typeof v === "string" && !!sections[v]) return true;
      if (!!v && typeof v === "object" && findResolveType(resolveType, v)) {
        return true;
      }
    }
  } else if (isObj) {
    for (const value of Object.values(decofile)) {
      const isString = typeof value === "string";
      if (
        isString && !!sections[value]
      ) return true;
      if (
        !!value && typeof value === "object" &&
        findResolveType(resolveType, value)
      ) {
        return true;
      }
    }
  }

  return false;
};

for (const sectionResolveType of Object.keys(_sections)) {
  const res = findResolveType(sectionResolveType, decofile);
  if (res === false) console.log(sectionResolveType);
}

console.log("finish");
Deno.exit(0);
