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

.markdown-body ol {
  list-style: numeric;
}

.toggle:checked + .toggled {
	display: block;
}

.markdown-body img {
  padding: 15px 0;
}
.markdown-body {
  font-family: Albert Sans,sans-serif;
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(CSS, {
      headers: {
        "content-type": "text/css",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  },
};
