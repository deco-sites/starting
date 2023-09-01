import typography from "typography";

export default {
  plugins: [typography],
  content: ["./**/*.tsx"],
  theme: {
    // https://tailwindcss.com/docs/container#centering-by-default
    container: {
      center: true,
    },
    backgroundPosition: {
      "position-100": "100%",
      "position-0": "0%",
    },
    extend: {
      backgroundImage: {
        "contact-us-bg-gradient":
          "linear-gradient(169.63deg, #00FF80 -0.25%, #095F5D 152.54%), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg);",
        "white-green":
          "linear-gradient(to top, #02F67C 0%, #02F67C 38%, #FFFFFF 38%, #FFFFFF 100%)",
        "white-green-half-desktop":
          "linear-gradient(to top, #02F67C 0%, #02F67C 50%, #FFFFFF 50%, #FFFFFF 100%)",
        "white-green-half-mobile":
          "linear-gradient(to top, #02F67C 0%, #02F67C 55%, #FFFFFF 45%, #FFFFFF 100%)",
        "linear-white-green":
          "linear-gradient(90deg,  rgba(255,255,255,0.8) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0.79) 50%, rgba(255,255,255,0.79) 100%)",
        "linear-transp-green":
          "linear-gradient(90deg,  rgba(255,255,255,0) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
        "linear-transp-green-transp":
          "radial-gradient(circle, rgba(0,255,128,1) 0%, rgba(0,255,128,0) 100%)",
        linear: "linear-gradient(180deg, #053535 0%, #0A2121 100%);",
        "linear-pricing":
          "linear-gradient(67.74deg, #053535 0.89%, #1D4949 47.43%, #053535 99.08%)",
        "linear-pricing-y":
          "linear-gradient(0deg, #0A2121 0.89%, #1D4949 99.08%)",
        "linear-border":
          "linear-gradient(31deg, #ffffff 0.89%, #053535e8 25%, #053535e8 75%, #ffffff 99.08%)",
        "linear-y-border":
          "linear-gradient(180deg, #F3FFF9 0.89%, #053535e8 80.08%, transparent 99%)",
        "dark-green-gradient":
          "linear-gradient(180deg, #0A2121 0%, #053535 100%)",
        "linear-header":
          "linear-gradient(270deg, rgba(0,0,0,0) 50%, rgba(0,255,128,1) 100%)",
        "linear-shadowing":
          "linear-gradient(180deg,rgba(6,53,53,0),rgb(6,50,49,0.7))",
        "gradient-green":
          "linear-gradient(to bottom, #F3FFF9 300px, #ffffff 20%);",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 60px rgba(0, 0, 0, 0.17)",
        "footer-shadow":
          "0px -6px 8px rgba(255, 255, 255, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.5)",
        "button-shadow": "0px 0px 4px rgba(0, 0, 0, 0.35)",
        "button-hover-shadow":
          "-2px -2px 4px rgba(255, 255, 255, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2)",
        "button-white-hover-shadow":
          "-2px -2px 4px rgba(255, 255, 255, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.06)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      keyframes: {
        blur1: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "20%": { transform: "translateY(25%) translateX(0)" },
          "40%": {
            transform: "translateY(40%) translateX(-10%) rotate(-90deg)",
          },
          "60%": {
            transform: "translateY(20%) translateX(-25%) rotate(-120deg)",
          },
          "80%": {
            transform: "translateY(0%) translateX(-15%) rotate(-90deg)",
          },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        blur2: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "20%": {
            transform: "translateY(-15%) translateX(-15%) rotate(90deg)",
          },
          "40%": { transform: "translateY(-30%) translateX(0) rotate(120deg)" },
          "60%": {
            transform:
              "translateY(-20%) translateX(40%) scale(130%) rotate(90deg)",
          },
          "80%": { transform: "translateY(-10%) translateX(25%) scale(115%)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        pageSpeedSwitcherText10: {
          "0%": { transform: "translateY(0%)", opacity: 1 },
          "30%": { transform: "translateY(-150%)", opacity: 0 },
          "70%": { transform: "translateY(150%)", opacity: 0 },
          to: { transform: "translateY(0%)", opacity: 1 },
        },
        pageSpeedSwitcherText20: {
          "0%": { transform: "translateY(150%)" },
          "30%": { transform: "translateY(0%)", opacity: 1 },
          "70%": { transform: "translateY(-150%)", opacity: 0 },
          to: { transform: "translateY(150%)", opacity: 0 },
        },
        pageSpeedSwitcherText30: {
          "0%": { transform: "translateY(150%)" },
          "30%": { transform: "translateY(150%)" },
          "70%": { transform: "translateY(0%)", opacity: 1 },
          to: { transform: "translateY(-150%)", opacity: 0 },
        },
        switcherText10: {
          "0%": { transform: "translateY(0%)", opacity: 1 },
          "4%": { transform: "translateY(0%)", opacity: 1 },
          "14%": { transform: "translateY(-150%)", opacity: 0 },
          "28%": { transform: "translateY(150%)" },
          "42%": { transform: "translateY(150%)" },
          "56%": { transform: "translateY(150%)" },
          "70%": { transform: "translateY(150%)" },
          "84%": { transform: "translateY(150%)", opacity: 0 },
          to: { transform: "translateY(0%)", opacity: 1 },
        },
        switcherText20: {
          "0%": { transform: "translateY(150%)" },
          "14%": { transform: "translateY(0%)", opacity: 1 },
          "18%": { transform: "translateY(0%)", opacity: 1 },
          "28%": { transform: "translateY(-150%)", opacity: 0 },
          "42%": { transform: "translateY(150%)", opacity: 0 },
          "56%": { transform: "translateY(150%)" },
          "70%": { transform: "translateY(150%)" },
          "84%": { transform: "translateY(150%)" },
          to: { transform: "translateY(150%)" },
        },
        switcherText30: {
          "0%": { transform: "translateY(150%)" },
          "14%": { transform: "translateY(150%)" },
          "28%": { transform: "translateY(0%)", opacity: 1 },
          "32%": { transform: "translateY(0%)", opacity: 1 },
          "42%": { transform: "translateY(-150%)", opacity: 0 },
          "56%": { transform: "translateY(150%)", opacity: 0 },
          "70%": { transform: "translateY(150%)" },
          "84%": { transform: "translateY(150%)" },
          to: { transform: "translateY(150%)" },
        },
        switcherText40: {
          "0%": { transform: "translateY(150%)" },
          "14%": { transform: "translateY(150%)" },
          "28%": { transform: "translateY(150%)" },
          "42%": { transform: "translateY(0%)", opacity: 1 },
          "46%": { transform: "translateY(0%)", opacity: 1 },
          "56%": { transform: "translateY(-150%)", opacity: 0 },
          "70%": { transform: "translateY(150%)", opacity: 0 },
          "84%": { transform: "translateY(150%)" },
          to: { transform: "translateY(150%)" },
        },
        switcherText50: {
          "0%": { transform: "translateY(150%)" },
          "14%": { transform: "translateY(150%)" },
          "28%": { transform: "translateY(150%)" },
          "42%": { transform: "translateY(150%)" },
          "56%": { transform: "translateY(0%)", opacity: 1 },
          "60%": { transform: "translateY(0%)", opacity: 1 },
          "70%": { transform: "translateY(-150%)", opacity: 0 },
          "84%": { transform: "translateY(150%)" },
          to: { transform: "translateY(150%)", opacity: 0 },
        },
        switcherText60: {
          "0%": { transform: "translateY(150%)" },
          "14%": { transform: "translateY(150%)" },
          "28%": { transform: "translateY(150%)" },
          "42%": { transform: "translateY(150%)" },
          "56%": { transform: "translateY(150%)" },
          "70%": { transform: "translateY(0%)", opacity: 1 },
          "74%": { transform: "translateY(0%)", opacity: 1 },
          "84%": { transform: "translateY(-150%)", opacity: 0 },
          to: { transform: "translateY(150%)", opacity: 0 },
        },
        switcherText70: {
          "0%": { transform: "translateY(150%)" },
          "14%": { transform: "translateY(150%)" },
          "28%": { transform: "translateY(150%)" },
          "42%": { transform: "translateY(150%)" },
          "56%": { transform: "translateY(150%)" },
          "70%": { transform: "translateY(150%)", opacity: 0 },
          "84%": { transform: "translateY(0%)", opacity: 1 },
          "88%": { transform: "translateY(0%)", opacity: 1 },
          to: { transform: "translateY(-150%)", opacity: 0 },
        },
        walk: {
          "0%": { transform: "translateX(-50%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        "backgound-color": {
          "0%": { "background-color": "black" },
          "10%": { "background-color": "#053535" },
          "50%": { "background-color": "#053535" },
          "60%": { "background-color": "black" },
          "100%": { "background-color": "black" },
        },
        "backgound-color-v2": {
          "0%": { "background-color": "black" },
          "10%": { "background-color": "#053535" },
          "50%": { "background-color": "#053535" },
          "60%": { "background-color": "black" },
          "100%": { "background-color": "black" },
        },
        "backgound-color-reverse": {
          "0%": { "background-color": "#053535" },
          "10%": { "background-color": "black" },
          "50%": { "background-color": "black" },
          "60%": { "background-color": "#053535" },
          "100%": { "background-color": "#053535" },
        },
        "backgound-color-v2-reverse": {
          "0%": { "background-color": "#053535" },
          "10%": { "background-color": "black" },
          "50%": { "background-color": "black" },
          "60%": { "background-color": "#053535" },
          "100%": { "background-color": "#053535" },
        },
        "left-opacity": {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 1.0 },
          "50%": { opacity: 1.0 },
          "60%": { opacity: 0.5 },
          "100%": { opacity: 0.5 },
        },
        "left-opacity-v2": {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 1.0 },
          "50%": { opacity: 1.0 },
          "60%": { opacity: 0.5 },
          "100%": { opacity: 0.5 },
        },
        "left-time-line": {
          "0%": { width: "0%" },
          "10%": { width: "0%" },
          "50%": { width: "100%" },
          "60%": { width: "100%" },
          "60.01%": { width: "0%" },
          "100%": { width: "0%" },
        },
        "left-time-line-v2": {
          "0%": { width: "0%" },
          "10%": { width: "0%" },
          "50%": { width: "100%" },
          "60%": { width: "100%" },
          "60.01%": { width: "0%" },
          "100%": { width: "0%" },
        },
        "left-text": {
          "0%": {},
          "10%": {},
          "50%": { visibility: "hidden" as const },
          "60%": {},
          "100%": { visibility: "hidden" as const },
        },
        "left-text-v2": {
          "0%": {},
          "10%": {},
          "50%": { visibility: "hidden" as const },
          "60%": {},
          "100%": { visibility: "hidden" as const },
        },
        "left-image": {
          "0%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "10%": {
            width: "130%",
            transform: "translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "50%": {
            width: "130%",
            transform: "translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "60%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "100%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
        },
        "left-image-v2": {
          "0%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "10%": {
            width: "130%",
            transform: "translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "50%": {
            width: "130%",
            transform: "translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "60%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "100%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
        },
        "left-image-reverse": {
          "0%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateY(40px)",
          },
          "10%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateY(0px)",
          },
          "50%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateY(0px)",
          },
          "60%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateY(40px)",
            "z-index": 10,
          },
          "100%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateY(40px)",
            "z-index": 10,
          },
        },
        "left-image-reverse-v2": {
          "0%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateY(40px)",
          },
          "10%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateY(0px)",
          },
          "50%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateY(0px)",
          },
          "60%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateY(40px)",
            "z-index": 10,
          },
          "100%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateY(40px)",
            "z-index": 10,
          },
        },

        "right-opacity": {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 0.5 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 1.0 },
          "100%": { opacity: 1.0 },
        },
        "right-opacity-v2": {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 0.5 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 1.0 },
          "100%": { opacity: 1.0 },
        },
        "right-time-line": {
          "0%": { width: "100%" },
          "10%": { width: "100%" },
          "10.01%": { width: "0%" },
          "60%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "right-time-line-v2": {
          "0%": { width: "100%" },
          "10%": { width: "100%" },
          "10.01%": { width: "0%" },
          "60%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "right-text": {
          "0%": { visibility: "hidden" as const },
          "10%": { visibility: "hidden" as const },
          "50%": { visibility: "hidden" as const },
          "60%": { visibility: "visible" as const },
          "100%": { visibility: "hidden" as const },
        },
        "right-text-v2": {
          "0%": { visibility: "hidden" as const },
          "10%": { visibility: "hidden" as const },
          "50%": { visibility: "hidden" as const },
          "60%": { visibility: "visible" as const },
          "100%": { visibility: "hidden" as const },
        },
        "right-image": {
          "0%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateX(-30%) translateY(40px)",
          },
          "10%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateX(0%) translateY(0px)",
          },
          "50%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateX(0%) translateY(0px)",
          },
          "60%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateX(-30%) translateY(40px)",
            "z-index": 10,
          },
          "100%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateX(-30%) translateY(40px)",
            "z-index": 10,
          },
        },
        "right-image-v2": {
          "0%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateX(-30%) translateY(40px)",
          },
          "10%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateX(0%) translateY(0px)",
          },
          "50%": {
            width: "100%",
            filter: "blur(8px)",
            transform: "translateX(0%) translateY(0px)",
          },
          "60%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateX(-30%) translateY(40px)",
            "z-index": 10,
          },
          "100%": {
            width: "130%",
            filter: "blur(0)",
            transform: "translateX(-30%) translateY(40px)",
            "z-index": 10,
          },
        },
        "right-image-reverse": {
          "0%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "10%": {
            width: "130%",
            transform: "translateX(-30%) translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "50%": {
            width: "130%",
            transform: "translateX(-30%) translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "60%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "100%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
        },
        "right-image-reverse-v2": {
          "0%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "10%": {
            width: "130%",
            transform: "translateX(-30%) translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "50%": {
            width: "130%",
            transform: "translateX(-30%) translateY(40px)",
            filter: "blur(0px)",
            "z-index": 10,
          },
          "60%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
          "100%": {
            width: "100%",
            transform: "translateY(0px)",
            filter: "blur(8px)",
          },
        },

        "left-image-mobile": {
          "0%": { transform: "translateX(105%)" },
          "10%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
          "60%": { transform: "translateX(105%)" },
          "100%": { transform: "translateX(105%)" },
        },
        "left-image-mobile-v2": {
          "0%": { transform: "translateX(105%)" },
          "10%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
          "60%": { transform: "translateX(105%)" },
          "100%": { transform: "translateX(105%)" },
        },
        "left-image-mobile-reverse": {
          "0%": { transform: "translateX(0%)" },
          "10%": { transform: "translateX(105%)" },
          "50%": { transform: "translateX(105%)" },
          "60%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "left-image-mobile-reverse-v2": {
          "0%": { transform: "translateX(0%)" },
          "10%": { transform: "translateX(105%)" },
          "50%": { transform: "translateX(105%)" },
          "60%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "right-image-mobile": {
          "0%": { transform: "translateX(-102%)" },
          "10%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
          "60%": { transform: "translateX(-102%)" },
          "100%": { transform: "translateX(-102%)" },
        },
        "right-image-mobile-v2": {
          "0%": { transform: "translateX(-102%)" },
          "10%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
          "60%": { transform: "translateX(-102%)" },
          "100%": { transform: "translateX(-102%)" },
        },
        "right-image-mobile-reverse": {
          "0%": { transform: "translateX(0%)" },
          "10%": { transform: "translateX(-102%)" },
          "50%": { transform: "translateX(-102%)" },
          "60%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "right-image-mobile-reverse-v2": {
          "0%": { transform: "translateX(0%)" },
          "10%": { transform: "translateX(-102%)" },
          "50%": { transform: "translateX(-102%)" },
          "60%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        blur1: "blur1 15s linear infinite",
        blur2: "blur2 15s linear infinite",
        pageSpeedSwitcherText10: "pageSpeedSwitcherText10 ease 7s infinite",
        pageSpeedSwitcherText20: "pageSpeedSwitcherText20 ease 7s infinite",
        pageSpeedSwitcherText30: "pageSpeedSwitcherText30 ease 7s infinite",
        switcherText10: "switcherText10 ease 13s infinite",
        switcherText20: "switcherText20 ease 13s infinite",
        switcherText30: "switcherText30 ease 13s infinite",
        switcherText40: "switcherText40 ease 13s infinite",
        switcherText50: "switcherText50 ease 13s infinite",
        switcherText60: "switcherText60 ease 13s infinite",
        switcherText70: "switcherText70 ease 13s infinite",
        walk: "walk 30s ease-in-out infinite",
        "backgound-color": "backgound-color 15s linear infinite",
        "backgound-color-v2": "backgound-color-v2 15s linear infinite",
        "backgound-color-reverse":
          "backgound-color-reverse 15s linear infinite",
        "backgound-color-v2-reverse":
          "backgound-color-v2-reverse 15s linear infinite",
        "left-opacity": "left-opacity 15s linear infinite",
        "left-opacity-v2": "left-opacity-v2 15s linear infinite",
        "left-time-line": "left-time-line 15s linear infinite",
        "left-time-line-v2": "left-time-line-v2 15s linear infinite",
        "left-text": "left-text 15s linear infinite",
        "left-text-v2": "left-text-v2 15s linear infinite",
        "left-image": "left-image 15s linear infinite",
        "left-image-v2": "left-image-v2 15s linear infinite",
        "left-image-reverse": "left-image-reverse 15s linear infinite",
        "left-image-reverse-v2": "left-image-reverse-v2 15s linear infinite",

        "right-opacity": "right-opacity 15s linear infinite",
        "right-opacity-v2": "right-opacity-v2 15s linear infinite",
        "right-time-line": "right-time-line 15s linear infinite",
        "right-time-line-v2": "right-time-line-v2 15s linear infinite",
        "right-text": "right-text 15s linear infinite",
        "right-text-v2": "right-text-v2 15s linear infinite",
        "right-image": "right-image 15s linear infinite",
        "right-image-v2": "right-image-v2 15s linear infinite",
        "right-image-reverse": "right-image-reverse 15s linear infinite",
        "right-image-reverse-v2": "right-image-reverse-v2 15s linear infinite",

        "left-image-mobile": "left-image-mobile 15s linear infinite",
        "left-image-mobile-v2": "left-image-mobile-v2 15s linear infinite",
        "left-image-mobile-reverse":
          "left-image-mobile-reverse 15s linear infinite",
        "left-image-mobile-reverse-v2":
          "left-image-mobile-reverse-v2 15s linear infinite",
        "right-image-mobile": "right-image-mobile 15s linear infinite",
        "right-image-mobile-v2": "right-image-mobile-v2 15s linear infinite",
        "right-image-mobile-reverse":
          "right-image-mobile-reverse 15s linear infinite",
        "right-image-mobile-reverse-v2":
          "right-image-mobile-reverse-v2 15s linear infinite",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1124px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "frame-515-rgba": "rgba(31, 38, 31, 0.67)",
        "input-rgba": "rgba(239, 239, 239, 0.17)",
        "white-opacity": "rgba(255, 255, 255, 0.22)",
        "border-white-opacity": "rgba(255, 255, 255, 0.05)",
        "border-black-opacity": "rgba(0, 0, 0, 0.05)",
        "white-79": "rgba(255, 255, 255, 0.79)",
        "semi-white-13": "rgba(217, 217, 217, 0.13)",
        "mytheme-10": "rgba(255, 255, 255, 0.10)",
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        secondary: "#02F67C",
        highlight: "#02F67C",
        "dark-green": "#0A2121",
        "almost-white": "#F3FFF9",
        transparent: "transparent",
        landingPrimary: "#0A2121",
        customGray: "#FAFAFA",
        lightGreen: "#F3FFF9",
        icon: "#2FD1800D",
        headerTheme: "#0A1F1F",
        landingText: "#06E474",
        agenciesColor: "#063535",
        hoverAgencie: "#1F4949",
        hoverPartners: "rgba(228, 227, 226, 0.3)",
        landingHover: "rgba(114, 177, 117, 0.09)",
        bgImage: "#02F67C",
        cardIcon: "#rgba(182, 228, 198, 0.8)",
        cardLanguage: "#001341",
        hoverBtn: "#e2c069",
      },
      fontFamily: {
        sans: "Albert Sans, sans-serif",
        serif: "serif",
        inter: "Inter, sans-serif",
      },
      fontSize: {
        responsiveHeadingText: "clamp(3.5rem, 0.3451rem + 6.5728vw, 7rem);",
      },
      typography: (theme: (x: string) => string) => ({
        DEFAULT: {
          css: {
            h1: {
              color: "#FF4500",
              fontWeight: "700",
              fontSize: "52px",
              fontFamily: theme("fontFamily.sans"),
            },
            h2: {
              marginTop: "28px",
              marginBottom: "28px",
              fontFamily: theme("fontFamily.sans"),
              fontWeight: "500",
            },
            h3: {
              marginTop: "28px",
              marginBottom: "16px",
              fontFamily: theme("fontFamily.sans"),
              fontWeight: "600",
            },
            color: theme('colors["primary-dark"]'),
            strong: {
              color: theme('colors["primary-dark"]'),
            },
            p: {
              lineHeight: "1.6rem",
            },
          },
        },
      }),
    },
  },
};
