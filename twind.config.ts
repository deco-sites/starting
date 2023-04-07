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
    },
    '.hidden-scroll::-webkit-scrollbar': {
      display: 'none',
    },
    '.hidden-scroll':{
      '-ms-overflow-style': 'none',  /* IE and Edge */
      'scrollbar-width': 'none'  /* Firefox */
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
          "linear-gradient(to top, #06E474 0%, #06E474 38%, #FFFFFF 38%, #FFFFFF 100%)",
        "linear-white-green":
          "linear-gradient(90deg,  rgba(255,255,255,0.8) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0.79) 50%, rgba(255,255,255,0.79) 100%)",
        "linear-transp-green":
          "linear-gradient(90deg,  rgba(255,255,255,0) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
        "linear-transp-green-transp":
          "radial-gradient(circle, rgba(0,255,128,1) 0%, rgba(0,255,128,0) 100%)",
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

        'backgound-color': {
          "0%": { 'background-color': "black" },
          "10%": { 'background-color': "#053535" },
          "50%": { 'background-color': "#053535" },
          "60%": { 'background-color': "black" },
          "100%": { 'background-color': "black" },
        },
        'backgound-color-v2': {
          "0%": { 'background-color': "black" },
          "10%": { 'background-color': "#053535" },
          "50%": { 'background-color': "#053535" },
          "60%": { 'background-color': "black" },
          "100%": { 'background-color': "black" },
        },
        'backgound-color-reverse': {
          "0%": { 'background-color': "#053535" },
          "10%": { 'background-color': "black" },
          "50%": { 'background-color': "black" },
          "60%": { 'background-color': "#053535" },
          "100%": { 'background-color': "#053535" },
        },
        'backgound-color-v2-reverse': {
          "0%": { 'background-color': "#053535" },
          "10%": { 'background-color': "black" },
          "50%": { 'background-color': "black" },
          "60%": { 'background-color': "#053535" },
          "100%": { 'background-color': "#053535" },
        },
        'left-opacity': {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 1.0 },
          "50%": { opacity: 1.0 },
          "60%": { opacity: 0.5 },
          "100%": { opacity: 0.5 },
        },
        'left-opacity-v2': {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 1.0 },
          "50%": { opacity: 1.0 },
          "60%": { opacity: 0.5 },
          "100%": { opacity: 0.5 },
        },
        'left-time-line': {
          "0%": { width: '0%' },
          "10%": { width: '0%' },
          "50%": { width: '100%' },
          "60%": { width: '100%' },
          "60.01%": { width: '0%' },
          "100%": { width: '0%' },
        },
        'left-time-line-v2': {
          "0%": { width: '0%' },
          "10%": { width: '0%' },
          "50%": { width: '100%' },
          "60%": { width: '100%' },
          "60.01%": { width: '0%' },
          "100%": { width: '0%' },
        },
        'left-text': {
          "0%": {  },
          "10%": {  },
          "50%": { visibility: 'hidden' },
          "60%": {  },
          "100%": { visibility: 'hidden' },
        },
        'left-text-v2': {
          "0%": {  },
          "10%": {  },
          "50%": { visibility: 'hidden' },
          "60%": {  },
          "100%": { visibility: 'hidden' },
        },
        'left-image': {
          "0%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)'  },
          "10%": { width: "130%", transform: "translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "50%": { width: "130%", transform: "translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "60%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
          "100%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
        },
        'left-image-v2': {
          "0%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)'  },
          "10%": { width: "130%", transform: "translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "50%": { width: "130%", transform: "translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "60%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
          "100%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
        },
        'left-image-reverse': {
          "0%": { width: "130%",  filter: 'blur(0)', transform: "translateY(40px)" },
          "10%": { width: "100%",  filter: 'blur(8px)', transform: "translateY(0px)" },
          "50%": { width: "100%", filter: 'blur(8px)', transform: "translateY(0px)" },
          "60%": { width: "130%", filter: 'blur(0)', transform: "translateY(40px)", 'z-index': 10 },
          "100%": { width: "130%", filter: 'blur(0)', transform: "translateY(40px)", 'z-index': 10 },
        },
        'left-image-reverse-v2': {
          "0%": { width: "130%",  filter: 'blur(0)', transform: "translateY(40px)" },
          "10%": { width: "100%",  filter: 'blur(8px)', transform: "translateY(0px)" },
          "50%": { width: "100%", filter: 'blur(8px)', transform: "translateY(0px)" },
          "60%": { width: "130%", filter: 'blur(0)', transform: "translateY(40px)", 'z-index': 10 },
          "100%": { width: "130%", filter: 'blur(0)', transform: "translateY(40px)", 'z-index': 10 },
        },

        'right-opacity': {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 0.5 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 1.0 },
          "100%": { opacity: 1.0 },
        },
        'right-opacity-v2': {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 0.5 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 1.0 },
          "100%": { opacity: 1.0 },
        },
        'right-time-line': {
          "0%": { width: '100%' },
          "10%": { width: '100%' },
          "10.01%": { width: '0%' },
          "60%": { width: '0%' },
          "100%": { width: '100%' },
        },
        'right-time-line-v2': {
          "0%": { width: '100%' },
          "10%": { width: '100%' },
          "10.01%": { width: '0%' },
          "60%": { width: '0%' },
          "100%": { width: '100%' },
        },
        'right-text': {
          "0%": { visibility: 'hidden' },
          "10%": { visibility: 'hidden' },
          "50%": { visibility: 'hidden' },
          "60%": { visibility: 'visible' },
          "100%": { visibility: 'hidden' },
        },
        'right-text-v2': {
          "0%": { visibility: 'hidden' },
          "10%": { visibility: 'hidden' },
          "50%": { visibility: 'hidden' },
          "60%": { visibility: 'visible' },
          "100%": { visibility: 'hidden' },
        },
        'right-image': {
          "0%": { width: "130%",  filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)" },
          "10%": { width: "100%",  filter: 'blur(8px)', transform: "translateX(0%) translateY(0px)" },
          "50%": { width: "100%", filter: 'blur(8px)', transform: "translateX(0%) translateY(0px)" },
          "60%": { width: "130%", filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)", 'z-index': 10 },
          "100%": { width: "130%", filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)", 'z-index': 10 },
        },
        'right-image-v2': {
          "0%": { width: "130%",  filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)" },
          "10%": { width: "100%",  filter: 'blur(8px)', transform: "translateX(0%) translateY(0px)" },
          "50%": { width: "100%", filter: 'blur(8px)', transform: "translateX(0%) translateY(0px)" },
          "60%": { width: "130%", filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)", 'z-index': 10 },
          "100%": { width: "130%", filter: 'blur(0)', transform: "translateX(-30%) translateY(40px)", 'z-index': 10 },
        },
        'right-image-reverse': {
          "0%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)'  },
          "10%": { width: "130%", transform: "translateX(-30%) translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "50%": { width: "130%", transform: "translateX(-30%) translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "60%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
          "100%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
        },
        'right-image-reverse-v2': {
          "0%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)'  },
          "10%": { width: "130%", transform: "translateX(-30%) translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "50%": { width: "130%", transform: "translateX(-30%) translateY(40px)", filter: 'blur(0px)', 'z-index': 10 },
          "60%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
          "100%": { width: "100%", transform: "translateY(0px)", filter: 'blur(8px)' },
        },

        'left-image-mobile': {
          "0%": { transform: "translateX(105%)"},
          "10%": { transform: "translateX(0%)"},
          "50%": { transform: "translateX(0%)"},
          "60%": { transform: "translateX(105%)"},
          "100%": { transform: "translateX(105%)"},
        },
        'left-image-mobile-v2': {
          "0%": { transform: "translateX(105%)"},
          "10%": { transform: "translateX(0%)"},
          "50%": { transform: "translateX(0%)"},
          "60%": { transform: "translateX(105%)"},
          "100%": { transform: "translateX(105%)"},
        },
        'left-image-mobile-reverse': {
          "0%": { transform: "translateX(0%)"},
          "10%": { transform: "translateX(105%)"},
          "50%": { transform: "translateX(105%)"},
          "60%": { transform: "translateX(0%)"},
          "100%": { transform: "translateX(0%)"},
        },
        'left-image-mobile-reverse-v2': {
          "0%": { transform: "translateX(0%)"},
          "10%": { transform: "translateX(105%)"},
          "50%": { transform: "translateX(105%)"},
          "60%": { transform: "translateX(0%)"},
          "100%": { transform: "translateX(0%)"},
        },
        'right-image-mobile': {
          "0%": { transform: "translateX(-102%)"},
          "10%": { transform: "translateX(0%)"},
          "50%": { transform: "translateX(0%)"},
          "60%": { transform: "translateX(-102%)"},
          "100%": { transform: "translateX(-102%)"},
        },
        'right-image-mobile-v2': {
          "0%": { transform: "translateX(-102%)"},
          "10%": { transform: "translateX(0%)"},
          "50%": { transform: "translateX(0%)"},
          "60%": { transform: "translateX(-102%)"},
          "100%": { transform: "translateX(-102%)"},
        },
        'right-image-mobile-reverse': {
          "0%": { transform: "translateX(0%)"},
          "10%": { transform: "translateX(-102%)"},
          "50%": { transform: "translateX(-102%)"},
          "60%": { transform: "translateX(0%)"},
          "100%": { transform: "translateX(0%)"},
        },
        'right-image-mobile-reverse-v2': {
          "0%": { transform: "translateX(0%)"},
          "10%": { transform: "translateX(-102%)"},
          "50%": { transform: "translateX(-102%)"},
          "60%": { transform: "translateX(0%)"},
          "100%": { transform: "translateX(0%)"},
        },
        
       
       
        
        
        
        
        
      },
      animation: {
        walk: "walk 30s ease-in-out infinite",
        'backgound-color': "backgound-color 15s linear infinite", 'backgound-color-v2': "backgound-color-v2 15s linear infinite",
        'backgound-color-reverse': "backgound-color-reverse 15s linear infinite", 'backgound-color-v2-reverse': "backgound-color-v2-reverse 15s linear infinite",
        'left-opacity': "left-opacity 15s linear infinite", 'left-opacity-v2': "left-opacity-v2 15s linear infinite",
        'left-time-line': "left-time-line 15s linear infinite", 'left-time-line-v2': "left-time-line-v2 15s linear infinite",
        'left-text': "left-text 15s linear infinite", 'left-text-v2': "left-text-v2 15s linear infinite",
        'left-image': "left-image 15s linear infinite", 'left-image-v2': "left-image-v2 15s linear infinite",
        'left-image-reverse': "left-image-reverse 15s linear infinite", 'left-image-reverse-v2': "left-image-reverse-v2 15s linear infinite",

        'right-opacity': "right-opacity 15s linear infinite", 'right-opacity-v2': "right-opacity-v2 15s linear infinite",
        'right-time-line': "right-time-line 15s linear infinite", 'right-time-line-v2': "right-time-line-v2 15s linear infinite",
        'right-text': "right-text 15s linear infinite", 'right-text-v2': "right-text-v2 15s linear infinite",
        'right-image': "right-image 15s linear infinite", 'right-image-v2': "right-image-v2 15s linear infinite",
        'right-image-reverse': "right-image-reverse 15s linear infinite", 'right-image-reverse-v2': "right-image-reverse-v2 15s linear infinite",

        'left-image-mobile': 'left-image-mobile 15s linear infinite', 'left-image-mobile-v2': 'left-image-mobile-v2 15s linear infinite',
        'left-image-mobile-reverse': 'left-image-mobile-reverse 15s linear infinite', 'left-image-mobile-reverse-v2': 'left-image-mobile-reverse-v2 15s linear infinite',
        'right-image-mobile': 'right-image-mobile 15s linear infinite', 'right-image-mobile-v2': 'right-image-mobile-v2 15s linear infinite',
        'right-image-mobile-reverse': 'right-image-mobile-reverse 15s linear infinite', 'right-image-mobile-reverse-v2': 'right-image-mobile-reverse-v2 15s linear infinite',


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
        "highlight": "#02F67C",
        "dark-green": "#0A2121",
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
