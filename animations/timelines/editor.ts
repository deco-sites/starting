import { AnimationTimeline } from "deco-sites/starting/animations/utils.ts";

const COMPONENT_LIBRARY_SEQUENCE: AnimationTimeline = [
  [
    "#library",
    {
      opacity: [0, 1],
      scale: [0.3, 1],
    },
    {
      at: 1.05,
      duration: 0.5,
      easing: "ease-out",
    },
  ],
  [
    "#library-product-image",
    {
      opacity: [0, 0.3],
      scale: 0.5,
      x: [370, 120],
      y: [430, 100],
      transformOrigin: "0 0",
    },
    {
      at: 2.0,
      duration: 1,
    },
  ],
  [
    "#library-product-image",
    {
      transformOrigin: "-60px -50px",
      opacity: [0.4, 0],
      scale: [0.5, 0.6],
    },
    {
      at: 3.0,
      duration: 0.2,
    },
  ],
  [
    "#library-product-image",
    {
      opacity: [0, 0, 1],
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "201px 188px",
    },
    {
      at: 3.2,
      duration: 0.5,
    },
  ],
  [
    "#library-product-description",
    {
      opacity: [0, 0.3],
      scale: 0.5,
      x: [0, 320],
      y: [430, 100],
      transformOrigin: "0 0",
    },
    {
      at: 2.2,
      duration: 1,
    },
  ],
  [
    "#library-product-description",
    {
      transformOrigin: "-160px -60px",
      opacity: [0.4, 0],
      scale: [0.5, 0.6],
    },
    {
      at: 3.2,
      duration: 0.2,
    },
  ],
  [
    "#library-product-description",
    {
      opacity: [0, 0, 1],
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "182px 110px",
    },
    {
      at: 3.4,
      duration: 0.5,
    },
  ],
  [
    "#library-product-form",
    {
      opacity: [0, 0.3],
      scale: 0.5,
      x: [240, 320],
      y: [430, 200],
      transformOrigin: "0 0",
    },
    {
      at: 3.0,
      duration: 1,
    },
  ],
  [
    "#library-product-form",
    {
      transformOrigin: "-160px -60px",
      opacity: [0.4, 0],
      scale: [0.5, 0.6],
    },
    {
      at: 4.0,
      duration: 0.2,
    },
  ],
  [
    "#library-product-form",
    {
      opacity: [0, 0, 1],
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "182px 110px",
    },
    {
      at: 4.2,
      duration: 0.5,
    },
  ],
];
const REALTIME_EDITOR_SEQUENCE: AnimationTimeline = [
  [
    "#realtime-cursor-tiago", {
      opacity: [0, 0, 1],
      x: ["300px", "450px"],
      y: ["800px", "590px"],
    },
    {
      at: 0.08,
      duration: 1,
      easing: "ease-out",
    },
  ],
  [
    "#realtime-cursor-tiago", {
      x: "350px",
      y: "400px"
    },
    {
      at: 1.08,
      duration: 1,
      easing: "ease-out",
    },
  ],
  [
    "#product-frame", {
      opacity: [0, 1],
      x: ["100px", "0px"],
      y: ["190px", "0px"],
    },
    {
      at: 1.08,
      duration: 0.8,
    },
  ],
  [
    "#realtime-cursor-muriel", {
      opacity: [0, 0, 1],
      x: ["400px", "540px"],
      y: ["0px", "120px"]
    },
    {
      at: 0.2,
      duration: 0.8,
    }
  ],
  [
    "#realtime-cursor-augusto", {
      opacity: [0, 0, 1],
      x: ["700px", "800px"],
      y: ["700px", "360px"]
    },
    {
      at: 0.2,
      duration: 0.8,
    }
  ],
  [
    "#realtime-cursor-augusto", {
      x: "750px"
    },
    {
      at: 1.28,
      duration: 0.8,
    }
  ],
  [
    "#product-form, #button-frame-br, #button-frame-bl, #button-frame-tr, #button-frame-tl", {
      x: ["50px", 0]
    },
    {
      at: 1.28,
      duration: 0.8,
    },
  ],
  [".product-name-frame", { opacity: [0, 1] }, { at: 0.2, duration: 0.8 }],
  [
    ".product-frame",
    { opacity: [0, 1] },
    {
      at: 1.04,
      duration: 0.8,
    },
  ],
  [
    "#product-name-border rect",
    { width: ["291.5px", "20px"] },
    {
      at: 1.14,
      duration: 0.2,
      easing: "ease-out",
    },
  ],
  [
    "#product-name-frame-tr, #product-name-frame-br",
    { transform: ["translateX(0)", "translateX(-271px)"] },
    {
      at: 1.14,
      duration: 0.2,
      easing: "ease-out",
    },
  ],
  [
    "#product-name-placeholder",
    { opacity: [1, 0] },
    {
      at: 1.14,
      duration: 0.06,
      easing: "ease-out",
    },
  ],
  [
    "#product-name",
    { width: ["0%", "290px"], opacity: 1 },
    {
      at: 1.8,
      duration: 1,
      easing: "steps(13, end)",
    },
  ],
  [
    "#realtime-mask",
    { width: ["0%", "290px"], opacity: 1 },
    {
      at: 1.8,
      duration: 1,
      easing: "steps(13, end)",
    },
  ],
  [
    "#realtime-cursor-muriel",
    { 
      x: "830px",
      y:"120px"
    },
    {
      at: 1.8,
      duration: 1,
      easing: "steps(13, end)",
    },
  ],
  [
    "#product-name-frame-br, #product-name-frame-tr",
    { transform: ["translateX(-271px)", "translateX(0)"] },
    {
      at: 1.8,
      duration: 1,
      easing: "steps(12, end)",
    },
  ],
  [
    "#product-name-border rect",
    { width: ["20px", "291.5px"] },
    {
      at: 1.8,
      duration: 1,
      easing: "steps(12, end)",
    },
  ],
];

export const DESIGN_SYSTEM_SEQUENCE: AnimationTimeline = [
  [
    "#ellipse-theme-1",
    {
      // @ts-ignore  svg property
      r: ["0", "1000"],
    },
    {
      at: 1.08,
      duration: 1,
    },
  ],
  [
    "#ellipse-theme-2",
    {
      // @ts-ignore  svg property
      r: ["0", "1000"],
    },

    {
      at: 2.08,
      duration: 1,
    },
  ],
  [
    "#ellipse-theme-3",
    {
      // @ts-ignore  svg property
      r: ["0", "1000"],
    },

    {
      at: 3.08,
      duration: 1,
    },
  ],
  [
    "#cursor-design-system",
    {
      opacity: [0, 0, 1],
      x: ["-115px", "171px"],
      y: ["200px", "414px"],
    },
    {
      at: 0.08,
      duration: 1,
      easing: "ease-out",
    },
  ],
  [
    "#cursor-design-system",
    {
      scale: ["1.0", "1.2", "1.0"],
      x: "171px",
      y: "414px",
    },
    {
      at: 1.08,
      duration: 0.2,
      easing: "ease-out",
    },
  ],
  [
    "#cursor-design-system",
    {
      x: "216px",
      y: "527px",
    },
    {
      at: 1.28,
      duration: 0.8,
      easing: "ease-out",
    },
  ],
  [
    "#cursor-design-system",
    {
      scale: ["1.0", "1.2", "1.0"],
    },
    {
      at: 2.08,
      duration: 0.2,
      easing: "ease-out",
    },
  ],
  [
    "#cursor-design-system",
    {
      x: "187px",
      y: "631px",
    },
    {
      at: 2.28,
      duration: 0.8,
      easing: "ease-out",
    },
  ],
  [
    "#cursor-design-system",
    {
      scale: ["1.0", "1.2", "1.0"],
    },
    {
      at: 3.08,
      duration: 0.2,
      easing: "ease-out",
    },
  ],
  [
    "#cursor-design-system",
    {
      x: "316px",
      y: "300px",
    },
    {
      at: 3.48,
      duration: 0.8,
      easing: "ease-out",
    },
  ],
  [
    "#cursor-design-system",
    {
      scale: ["1.0", "1.2", "1.0"],
    },
    {
      duration: 0.2,
      easing: "ease-out",
    },
  ],
  [
    "#ellipse-theme-1, #ellipse-theme-2, #ellipse-theme-3",
    {
      // @ts-ignore  svg property
      r: 0,
    },
    {
      duration: 1,
    },
  ],
];

const FULL_CODE_SEQUENCE: AnimationTimeline = [
  [
    "#cursor-full-code",
    {
      opacity: [0, 0, 1],
      x: ["300px", "520px"],
      y: ["800px", "520px"],
    },
    {
      at: 0.08,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#cursor-full-code",
    {
      x: "700px",
      y: "680px",
    },
    {
      at: 1.08,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#full-code-mask rect",
    {
      height: ["0px", "203px"],
    },
    {
      at: 1.08,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#full-code-shipping",
    {
      transformOrigin: "637px 235px",
    },
    {
      at: 2.08,
      duration: 0.1,
    },
  ],
  [
    "#full-code-shipping",
    {
      opacity: [0, 1],
      scale: ["0.5", "1"],
    },
    {
      at: 2.08,
      duration: 0.5,
    },
  ],
  [
    "#full-code-description, #full-code-form",
    {
      y: ["-102px", "0"],
    },
    {
      at: 2.08,
      duration: 0.5,
    },
  ],
];

const APPS_INTEGRATIONS_SEQUENCE: AnimationTimeline = [
  [
    "#cursor-apps",
    { opacity: [0, 0, 1], x: ["0px", "180px"], y: ["800px", "450px"] },
    {
      duration: 1,
      at: 0.08,
    },
  ],
  [
    "#cursor-apps",
    {
      scale: ["1.0", "1.1", "1.0"],
    },
    {
      at: 1.08,
      duration: 0.2,
      easing: "ease",
    },
  ],
  [
    "#app-1-install",
    {
      opacity: [1, 0],
    },
    {
      at: 1.08,
      duration: 0.1,
      easing: "ease",
    },
  ],
  [
    "#app-1-installed",
    {
      opacity: [0, 1],
    },
    {
      at: 1.08,
      duration: 0.1,
      easing: "ease",
    },
  ],
  [
    "#app-1-installed",
    {
      opacity: [0, 1],
    },
    {
      at: 1.08,
      duration: 0.1,
      easing: "ease",
    },
  ],
  [
    "#apps-mask circle" ,
    {
      // @ts-ignore svg property
      r: ["0px", "250px"],
    },
    {
      at: 1.08,
      duration: 0.5,
      easing: "ease",
    },
  ],
  [
    "#cursor-apps",
    { x: "395px", y: "450px" },
    { duration: 1, at: 1.28 },
  ],
  [
    "#cursor-apps",
    {
      scale: ["1.0", "1.1", "1.0"],
    },
    {
      at: 2.28,
      duration: 0.2,
      easing: "ease",
    },
  ],
  [
    "#app-2-install",
    {
      opacity: [1, 0],
    },
    {
      at: 2.28,
      duration: 0.1,
      easing: "ease",
    },
  ],
  [
    "#app-2-installed",
    {
      opacity: [0, 1],
    },
    {
      at: 2.28,
      duration: 0.1,
      easing: "ease",
    },
  ],
  [
    "#apps-reviews",
    {
      transformOrigin: "600px 600px",
    },
    {
      at: 2.28,
      duration: 0.2,
      easing: "ease",
    },
  ],
  [
    "#apps-reviews",
    {
      opacity: [0, 1],
      scale: ["0.5", "1"],
    },
    {
      at: 2.28,
      duration: 0.5,
      easing: "ease",
    },
  ],
  [
    "#cursor-apps",
    { x: "185px", y: "530px" },
    { duration: 1, at: 2.48 },
  ],
  [
    "#cursor-apps",
    {
      scale: ["1.0", "1.1", "1.0"],
    },
    {
      at: 3.48,
      duration: 0.2,
      easing: "ease",
    },
  ],
  [
    "#app-3-install",
    {
      opacity: [1, 0],
    },
    {
      at: 3.48,
      duration: 0.1,
      easing: "ease",
    },
  ],
  [
    "#app-3-installed",
    {
      opacity: [0, 1],
    },
    {
      at: 3.48,
      duration: 0.1,
      easing: "ease",
    },
  ],
  [
    "#apps-searchbar",
    {
      opacity: [0, 1],
      y: ["-20px", "0px"],
    },
    {
      at: 3.48,
      duration: 0.5,
      easing: "ease",
    },
  ],
  [
    "#apps-content",
    {
      y: ["-19px", "0px"],
    },
    {
      at: 3.48,
      duration: 0.5,
      easing: "ease",
    },
  ],
];

const ANALYTICS_SEQUENCE: AnimationTimeline = [
  [
    "#cursor-analytics",
    {
      opacity: [0, 0, 1],
      x: ["-40px", "120px"],
      y: ["200px", "80px"],
    },
    {
      at: 0.08,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#cursor-analytics",
    {
      scale: ["1.0", "1.1", "1.0"],
    },
    {
      at: 1.08,
      duration: 0.2,
      easing: "ease",
    },
  ],
  [
    "#analytics-plausible",
    {
      opacity: [0, 1],
      y: ["50px", "0"],
    },
    {
      duration: 0.5,
    },
  ],
  [
    "#cursor-analytics",
    {
      x: "720px",
      y: "80px",
    },
    {
      at: 1.28,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#cursor-analytics",
    {
      scale: ["1.0", "1.1", "1.0"],
    },
    {
      at: 2.28,
      duration: 0.2,
      easing: "ease",
    },
  ],
  [
    "#analytics-hyperdx",
    {
      opacity: [0, 1],
      y: ["50px", "0"],
    },
    {
      duration: 0.5,
    },
  ],
  [
    "#cursor-analytics",
    {
      x: "750px",
      y: "430px",
    },
    {
      at: 2.48,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#cursor-analytics",
    {
      scale: ["1.0", "1.1", "1.0"],
    },
    {
      at: 3.48,
      duration: 0.2,
      easing: "ease",
    },
  ],
  [
    "#analytics-cwv",
    {
      opacity: [0, 1],
      y: ["50px", "0"],
    },
    {
      duration: 0.5,
    },
  ],
];

const CONTENT_MODELING_SEQUENCE: AnimationTimeline = [
  [
    "#cursor-content-modeling",
    {
      opacity: [0, 0, 1],
      x: ["600px", "372px"],
      y: ["600px", "380px"],
    },
    {
      at: 0.08,
      duration: 1.2,
      easing: "ease",
    },
  ],
  [
    "#content-modeling-code",
    {
      opacity: [0, 1],
      y: ["50px", "0"],
    },
    {
      at: 1.28,
      duration: 0.5,
    },
  ],
  [
    "#cursor-content-modeling",
    {
      x: "620px",
      y: "700px",
    },
    {
      at: 1.78,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#content-modeling-mask rect",
    {
      height: ["0px", "336px"],
    },
    {
      at: 1.78,
      duration: 1,
      easing: "ease",
    },
  ],
  [
    "#content-modeling-list",
    {
      opacity: [0, 1],
      y: ["50px", "0"],
    },
    {
      at: 3,
      duration: 0.5,
    },
  ],
  [
    "#content-modeling-post",
    {
      opacity: [0, 1],
      y: ["50px", "0"],
    },
    {
      at: 3.5,
      duration: 0.5,
    },
  ],
];

export const EDITOR_TIMELINES: AnimationTimeline[] = [
  COMPONENT_LIBRARY_SEQUENCE,
  REALTIME_EDITOR_SEQUENCE,
  DESIGN_SYSTEM_SEQUENCE,
  FULL_CODE_SEQUENCE,
  APPS_INTEGRATIONS_SEQUENCE,
  DESIGN_SYSTEM_SEQUENCE,
  ANALYTICS_SEQUENCE,
  CONTENT_MODELING_SEQUENCE,
];
