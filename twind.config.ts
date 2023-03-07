/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    backgroundPosition: {
      'position-100': '100%',
      'position-0': '0%',
    },
    extend: {
      backgroundImage: {
        'white-green': 'linear-gradient(to top, #06E474 0%, #06E474 36%, #FFFFFF 36%, #FFFFFF 100%)',
        'linear-white-green': 'linear-gradient(90deg,  rgba(255,255,255,0.8) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.8) 100%)',
        'linear-transp-green': 'linear-gradient(90deg,  rgba(255,255,255,0) 0%, rgba(47,209,128,0.8) 49%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        'custom-shadow': '0px 4px 60px rgba(0, 0, 0, 0.17)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      keyframes: {
        walk: {
          '0%': {  transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        walk: 'walk 30s ease-in-out infinite',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        'frame-515-rgba': 'rgba(31, 38, 31, 0.67)',
        'input-rgba' : 'rgba(239, 239, 239, 0.17)',
        'white-opacity' : 'rgba(255, 255, 255, 0.22)',
        'border-white-opacity' : 'rgba(255, 255, 255, 0.05)',
        'border-black-opacity' : 'rgba(0, 0, 0, 0.05)',
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
