import { AnimationTimeline } from "deco-sites/starting/animations/utils.ts";

export const HERO_ANIMATION_SEQUENCE: AnimationTimeline = [
  [
    "#preview-desk",
    { opacity: 1, transform: "translateY(0)" },
    { duration: 0.8, at: 0.2 },
  ],
  [
    "#preview-mobile",
    { opacity: 1, transform: "translateY(0)" },
    { duration: 0.87, at: 0.24 },
  ],
  [
    "#chair-text",
    { width: ["0%", "160px"], opacity: 1 },
    {
      at: 2.2,
      duration: 1,
      easing: "steps(12, end)",
    },
  ],
  [
    "#chair-text",
    { borderColor: ["transparent", "white", "transparent"] },
    {
      at: 2.2,
      duration: 1,
    },
  ],
  [
    "#cursor-1",
    {
      offsetDistance: "100%",
    },
    { duration: 1.4, at: 2.06 },
  ],
  [
    "#cursor-2",
    {
      offsetDistance: "100%",
    },
    { duration: 1.4, at: 1.02 },
  ],
  [
    "#cursor-3",
    {
      offsetDistance: "100%",
    },
    { duration: 1.4, at: 0.26 },
  ],
  [
    "#cursor-4",
    {
      offsetDistance: "100%",
    },
    { duration: 1.4, at: 0.2 },
  ],
  [
    "#code-window",
    { opacity: 1, transform: ["scale(0.3)", "scale(1)"] },
    { at: 2.1, duration: 0.13, easing: "ease-out" },
  ],
  [
    "#theme-window",
    { opacity: 1, transform: ["scale(0.3)", "scale(1)"] },
    { at: 3.15, duration: 0.13, easing: "ease-out" },
  ],
];
