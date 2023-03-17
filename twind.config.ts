/** @type {import('$fresh/plugins/twind').Options} */

export default {
  preflight: (preflight) => ({
    ...preflight,
    html: {
          'line-height': '1.5',
          '-webkit-text-size-adjust': '100%',
          'font-family': 'Albert Sans,sans-serif',
          'scroll-behavior': 'smooth'
    },
    'details > summary': {
      'list-style': 'none'
    },    
    'details summary::-webkit-details-marker': {
      'display':'none'
    },
    'details[open] summary svg': {
      'transform': 'rotate(180deg)'
    }
  }),
  theme: {
    backgroundPosition: {
      "position-100": "100%",
      "position-0": "0%",
    },
    extend: {
      backgroundImage: {
        "white-green":
          "linear-gradient(to top, #06E474 0%, #06E474 43%, #FFFFFF 43%, #FFFFFF 100%)",
        "linear-white-green":
          "linear-gradient(90deg,  rgba(255,255,255,0.8) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0.79) 50%, rgba(255,255,255,0.79) 100%)",
        "linear-transp-green":
          "linear-gradient(90deg,  rgba(255,255,255,0) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 60px rgba(0, 0, 0, 0.17)",
      },
      transitionProperty: {
        "height": "height",
        "spacing": "margin, padding",
      },
      keyframes: {
        walk: {
          "0%": { transform: "translateX(-50%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'cms-white': {
          "0%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)'  },
          "10%": { width: "130%", transform: "translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "50%": { width: "130%", transform: "translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "60%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
          "100%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
        },
        'cms-white-mobile': {
          "0%": { transform: "translateY(0%)"},
          "10%": { transform: "translateY(-100%)"},
          "50%": { transform: "translateY(-100%)"},
          "60%": { transform: "translateY(0%)"},
          "100%": { transform: "translateY(0%)"},
          
        },
        'cms-black': {
          "0%": { width: "130%",  filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)" },
          "10%": { width: "100%",  filter: 'blur(8px)', transform: "translateX(0%) translateY(0px)" },
          "50%": { width: "100%", filter: 'blur(8px)', transform: "translateX(0%) translateY(0px)" },
          "60%": { width: "130%", filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)", 'z-index': 10 },
          "100%": { width: "130%", filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)", 'z-index': 10 },
        },
        'backgound-color': {
          "0%": { 'background-color': "black" },
          "10%": { 'background-color': "#053535" },
          "50%": { 'background-color': "#053535" },
          "60%": { 'background-color': "black" },
          "100%": { 'background-color': "black" },
        },
        'time-line-first': {
          "0%": { width: '0%' },
          "10%": { width: '0%' },
          "50%": { width: '100%' },
          "60%": { width: '100%' },
          "60.01%": { width: '0%' },
          "100%": { width: '0%' },
        },
        'time-line-second': {
          "0%": { width: '100%' },
          "10%": { width: '100%' },
          "10.01%": { width: '0%' },
          "60%": { width: '0%' },
          "100%": { width: '100%' },
        },
        'opacity-first': {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 1.0 },
          "50%": { opacity: 1.0 },
          "60%": { opacity: 0.5 },
          "100%": { opacity: 0.5 },
        },
        'opacity-second': {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 0.5 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 1.0 },
          "100%": { opacity: 1.0 },
        },
        'text-first': {
          "0%": { height: '100%' },
          "10%": { height: '100%' },
          "50%": { height: '0px', visibility: 'hidden' },
          "60%": { height: '0px' },
          "100%": { height: '0px', visibility: 'hidden' },
        },
        'text-second': {
          "0%": { height: '0px', visibility: 'hidden' },
          "10%": { height: '0px', visibility: 'hidden' },
          "50%": { height: '0px', visibility: 'hidden' },
          "60%": { height: '100%', visibility: 'visible' },
          "100%": { height: '0px', visibility: 'hidden' },
        },
      },
      animation: {
        walk: "walk 30s ease-in-out infinite",
        'cms-white': "cms-white 10s linear infinite",
        'cms-white-mobile': "cms-white-mobile 10s linear infinite",
        'cms-black': "cms-black 10s linear infinite",
        'backgound-color': "backgound-color 10s linear infinite",
        'time-line-first': "time-line-first 10s linear infinite",
        'time-line-second': "time-line-second 10s linear infinite",
        'opacity-first': "opacity-first 10s linear infinite",
        'opacity-second': "opacity-second 10s linear infinite",
        'text-first': "text-first 10s linear infinite",
        'text-second': "text-second 10s linear infinite",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
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
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        serif: ["serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
};
