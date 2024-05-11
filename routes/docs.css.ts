import { Handlers } from "$fresh/server.ts";
import { gfm } from "../components/utils/markdown.ts";

// Copied from: https://github.com/denoland/fresh/blob/744a10e5911df38bff779686c86ca10fb4589dfe/www/routes/gfm.css.ts

const CSS = `${gfm.CSS}

ol.nested {
	counter-reset: item;
}

ol.nested li {
	display: block;
}

ol.nested li:before {
	font-feature-settings: "kern" 1, "tnum" 1;
	-webkit-font-feature-settings: "kern" 1, "tnum" 1;
	-ms-font-feature-settings: "kern" 1, "tnum" 1;
	-moz-font-feature-settings: "kern" 1, "tnum" 1;
	content: counters(item, ".") ". ";
	counter-increment: item;
}

.markdown-body ul {
  list-style: disc;
}

.markdown-body pre {
  overflow-x: scroll;
  width: 100%;
  background-color: #ffffff0d !important;
  border: 2px solid #ffffff26;
  position: relative !important;
  display: block !important;
}

.markdown-body ol {
  list-style: numeric;
}

.toggle:checked + .toggled {
	display: block;
}

.markdown-body img {
  margin: 15px 0;
  background: none;
  border-radius: .5rem;
}

.markdown-body a {
  color: #4ADE80;
}

.markdown-body {
  font-family: Albert Sans,sans-serif;
}

.div-copy {
  cursor: pointer;
  position: absolute;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border: 2px solid #ffffff26;
  top: .5rem;
  right: .5rem;
}

.div-copy:hover {
  color: #4ADE80;
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(CSS, {
      headers: {
        "content-type": "text/css",
        "cache-control": "public, max-age=86400, immutable",
      },
    });
  },
};
