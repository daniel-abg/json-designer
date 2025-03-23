
    import { css } from "lit";
    export const TWStyles = css` /*! tailwindcss v4.0.15 | MIT License | https://tailwindcss.com */
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-50: oklch(0.971 0.013 17.38);
    --color-red-100: oklch(0.936 0.032 17.717);
    --color-red-200: oklch(0.885 0.062 18.334);
    --color-red-300: oklch(0.808 0.114 19.571);
    --color-red-400: oklch(0.704 0.191 22.216);
    --color-red-500: oklch(0.637 0.237 25.331);
    --color-red-600: oklch(0.577 0.245 27.325);
    --color-red-700: oklch(0.505 0.213 27.518);
    --color-red-800: oklch(0.444 0.177 26.899);
    --color-red-900: oklch(0.396 0.141 25.723);
    --color-red-950: oklch(0.258 0.092 26.042);
    --color-orange-50: oklch(0.98 0.016 73.684);
    --color-orange-100: oklch(0.954 0.038 75.164);
    --color-orange-200: oklch(0.901 0.076 70.697);
    --color-orange-300: oklch(0.837 0.128 66.29);
    --color-orange-400: oklch(0.75 0.183 55.934);
    --color-orange-500: oklch(0.705 0.213 47.604);
    --color-orange-600: oklch(0.646 0.222 41.116);
    --color-orange-700: oklch(0.553 0.195 38.402);
    --color-orange-800: oklch(0.47 0.157 37.304);
    --color-orange-900: oklch(0.408 0.123 38.172);
    --color-orange-950: oklch(0.266 0.079 36.259);
    --color-amber-50: oklch(0.987 0.022 95.277);
    --color-amber-100: oklch(0.962 0.059 95.617);
    --color-amber-200: oklch(0.924 0.12 95.746);
    --color-amber-300: oklch(0.879 0.169 91.605);
    --color-amber-400: oklch(0.828 0.189 84.429);
    --color-amber-500: oklch(0.769 0.188 70.08);
    --color-amber-600: oklch(0.666 0.179 58.318);
    --color-amber-700: oklch(0.555 0.163 48.998);
    --color-amber-800: oklch(0.473 0.137 46.201);
    --color-amber-900: oklch(0.414 0.112 45.904);
    --color-amber-950: oklch(0.279 0.077 45.635);
    --color-yellow-50: oklch(0.987 0.026 102.212);
    --color-yellow-100: oklch(0.973 0.071 103.193);
    --color-yellow-200: oklch(0.945 0.129 101.54);
    --color-yellow-300: oklch(0.905 0.182 98.111);
    --color-yellow-400: oklch(0.852 0.199 91.936);
    --color-yellow-500: oklch(0.795 0.184 86.047);
    --color-yellow-600: oklch(0.681 0.162 75.834);
    --color-yellow-700: oklch(0.554 0.135 66.442);
    --color-yellow-800: oklch(0.476 0.114 61.907);
    --color-yellow-900: oklch(0.421 0.095 57.708);
    --color-yellow-950: oklch(0.286 0.066 53.813);
    --color-lime-50: oklch(0.986 0.031 120.757);
    --color-lime-100: oklch(0.967 0.067 122.328);
    --color-lime-200: oklch(0.938 0.127 124.321);
    --color-lime-300: oklch(0.897 0.196 126.665);
    --color-lime-400: oklch(0.841 0.238 128.85);
    --color-lime-500: oklch(0.768 0.233 130.85);
    --color-lime-600: oklch(0.648 0.2 131.684);
    --color-lime-700: oklch(0.532 0.157 131.589);
    --color-lime-800: oklch(0.453 0.124 130.933);
    --color-lime-900: oklch(0.405 0.101 131.063);
    --color-lime-950: oklch(0.274 0.072 132.109);
    --color-green-50: oklch(0.982 0.018 155.826);
    --color-green-100: oklch(0.962 0.044 156.743);
    --color-green-200: oklch(0.925 0.084 155.995);
    --color-green-300: oklch(0.871 0.15 154.449);
    --color-green-400: oklch(0.792 0.209 151.711);
    --color-green-500: oklch(0.723 0.219 149.579);
    --color-green-600: oklch(0.627 0.194 149.214);
    --color-green-700: oklch(0.527 0.154 150.069);
    --color-green-800: oklch(0.448 0.119 151.328);
    --color-green-900: oklch(0.393 0.095 152.535);
    --color-green-950: oklch(0.266 0.065 152.934);
    --color-emerald-50: oklch(0.979 0.021 166.113);
    --color-emerald-100: oklch(0.95 0.052 163.051);
    --color-emerald-200: oklch(0.905 0.093 164.15);
    --color-emerald-300: oklch(0.845 0.143 164.978);
    --color-emerald-400: oklch(0.765 0.177 163.223);
    --color-emerald-500: oklch(0.696 0.17 162.48);
    --color-emerald-600: oklch(0.596 0.145 163.225);
    --color-emerald-700: oklch(0.508 0.118 165.612);
    --color-emerald-800: oklch(0.432 0.095 166.913);
    --color-emerald-900: oklch(0.378 0.077 168.94);
    --color-emerald-950: oklch(0.262 0.051 172.552);
    --color-teal-50: oklch(0.984 0.014 180.72);
    --color-teal-100: oklch(0.953 0.051 180.801);
    --color-teal-200: oklch(0.91 0.096 180.426);
    --color-teal-300: oklch(0.855 0.138 181.071);
    --color-teal-400: oklch(0.777 0.152 181.912);
    --color-teal-500: oklch(0.704 0.14 182.503);
    --color-teal-600: oklch(0.6 0.118 184.704);
    --color-teal-700: oklch(0.511 0.096 186.391);
    --color-teal-800: oklch(0.437 0.078 188.216);
    --color-teal-900: oklch(0.386 0.063 188.416);
    --color-teal-950: oklch(0.277 0.046 192.524);
    --color-cyan-50: oklch(0.984 0.019 200.873);
    --color-cyan-100: oklch(0.956 0.045 203.388);
    --color-cyan-200: oklch(0.917 0.08 205.041);
    --color-cyan-300: oklch(0.865 0.127 207.078);
    --color-cyan-400: oklch(0.789 0.154 211.53);
    --color-cyan-500: oklch(0.715 0.143 215.221);
    --color-cyan-600: oklch(0.609 0.126 221.723);
    --color-cyan-700: oklch(0.52 0.105 223.128);
    --color-cyan-800: oklch(0.45 0.085 224.283);
    --color-cyan-900: oklch(0.398 0.07 227.392);
    --color-cyan-950: oklch(0.302 0.056 229.695);
    --color-sky-50: oklch(0.977 0.013 236.62);
    --color-sky-100: oklch(0.951 0.026 236.824);
    --color-sky-200: oklch(0.901 0.058 230.902);
    --color-sky-300: oklch(0.828 0.111 230.318);
    --color-sky-400: oklch(0.746 0.16 232.661);
    --color-sky-500: oklch(0.685 0.169 237.323);
    --color-sky-600: oklch(0.588 0.158 241.966);
    --color-sky-700: oklch(0.5 0.134 242.749);
    --color-sky-800: oklch(0.443 0.11 240.79);
    --color-sky-900: oklch(0.391 0.09 240.876);
    --color-sky-950: oklch(0.293 0.066 243.157);
    --color-blue-50: oklch(0.97 0.014 254.604);
    --color-blue-100: oklch(0.932 0.032 255.585);
    --color-blue-200: oklch(0.882 0.059 254.128);
    --color-blue-300: oklch(0.809 0.105 251.813);
    --color-blue-400: oklch(0.707 0.165 254.624);
    --color-blue-500: oklch(0.623 0.214 259.815);
    --color-blue-600: oklch(0.546 0.245 262.881);
    --color-blue-700: oklch(0.488 0.243 264.376);
    --color-blue-800: oklch(0.424 0.199 265.638);
    --color-blue-900: oklch(0.379 0.146 265.522);
    --color-blue-950: oklch(0.282 0.091 267.935);
    --color-indigo-50: oklch(0.962 0.018 272.314);
    --color-indigo-100: oklch(0.93 0.034 272.788);
    --color-indigo-200: oklch(0.87 0.065 274.039);
    --color-indigo-300: oklch(0.785 0.115 274.713);
    --color-indigo-400: oklch(0.673 0.182 276.935);
    --color-indigo-500: oklch(0.585 0.233 277.117);
    --color-indigo-600: oklch(0.511 0.262 276.966);
    --color-indigo-700: oklch(0.457 0.24 277.023);
    --color-indigo-800: oklch(0.398 0.195 277.366);
    --color-indigo-900: oklch(0.359 0.144 278.697);
    --color-indigo-950: oklch(0.257 0.09 281.288);
    --color-violet-50: oklch(0.969 0.016 293.756);
    --color-violet-100: oklch(0.943 0.029 294.588);
    --color-violet-200: oklch(0.894 0.057 293.283);
    --color-violet-300: oklch(0.811 0.111 293.571);
    --color-violet-400: oklch(0.702 0.183 293.541);
    --color-violet-500: oklch(0.606 0.25 292.717);
    --color-violet-600: oklch(0.541 0.281 293.009);
    --color-violet-700: oklch(0.491 0.27 292.581);
    --color-violet-800: oklch(0.432 0.232 292.759);
    --color-violet-900: oklch(0.38 0.189 293.745);
    --color-violet-950: oklch(0.283 0.141 291.089);
    --color-purple-50: oklch(0.977 0.014 308.299);
    --color-purple-100: oklch(0.946 0.033 307.174);
    --color-purple-200: oklch(0.902 0.063 306.703);
    --color-purple-300: oklch(0.827 0.119 306.383);
    --color-purple-400: oklch(0.714 0.203 305.504);
    --color-purple-500: oklch(0.627 0.265 303.9);
    --color-purple-600: oklch(0.558 0.288 302.321);
    --color-purple-700: oklch(0.496 0.265 301.924);
    --color-purple-800: oklch(0.438 0.218 303.724);
    --color-purple-900: oklch(0.381 0.176 304.987);
    --color-purple-950: oklch(0.291 0.149 302.717);
    --color-fuchsia-50: oklch(0.977 0.017 320.058);
    --color-fuchsia-100: oklch(0.952 0.037 318.852);
    --color-fuchsia-200: oklch(0.903 0.076 319.62);
    --color-fuchsia-300: oklch(0.833 0.145 321.434);
    --color-fuchsia-400: oklch(0.74 0.238 322.16);
    --color-fuchsia-500: oklch(0.667 0.295 322.15);
    --color-fuchsia-600: oklch(0.591 0.293 322.896);
    --color-fuchsia-700: oklch(0.518 0.253 323.949);
    --color-fuchsia-800: oklch(0.452 0.211 324.591);
    --color-fuchsia-900: oklch(0.401 0.17 325.612);
    --color-fuchsia-950: oklch(0.293 0.136 325.661);
    --color-pink-50: oklch(0.971 0.014 343.198);
    --color-pink-100: oklch(0.948 0.028 342.258);
    --color-pink-200: oklch(0.899 0.061 343.231);
    --color-pink-300: oklch(0.823 0.12 346.018);
    --color-pink-400: oklch(0.718 0.202 349.761);
    --color-pink-500: oklch(0.656 0.241 354.308);
    --color-pink-600: oklch(0.592 0.249 0.584);
    --color-pink-700: oklch(0.525 0.223 3.958);
    --color-pink-800: oklch(0.459 0.187 3.815);
    --color-pink-900: oklch(0.408 0.153 2.432);
    --color-pink-950: oklch(0.284 0.109 3.907);
    --color-rose-50: oklch(0.969 0.015 12.422);
    --color-rose-100: oklch(0.941 0.03 12.58);
    --color-rose-200: oklch(0.892 0.058 10.001);
    --color-rose-300: oklch(0.81 0.117 11.638);
    --color-rose-400: oklch(0.712 0.194 13.428);
    --color-rose-500: oklch(0.645 0.246 16.439);
    --color-rose-600: oklch(0.586 0.253 17.585);
    --color-rose-700: oklch(0.514 0.222 16.935);
    --color-rose-800: oklch(0.455 0.188 13.697);
    --color-rose-900: oklch(0.41 0.159 10.272);
    --color-rose-950: oklch(0.271 0.105 12.094);
    --color-slate-50: oklch(0.984 0.003 247.858);
    --color-slate-100: oklch(0.968 0.007 247.896);
    --color-slate-200: oklch(0.929 0.013 255.508);
    --color-slate-300: oklch(0.869 0.022 252.894);
    --color-slate-400: oklch(0.704 0.04 256.788);
    --color-slate-500: oklch(0.554 0.046 257.417);
    --color-slate-600: oklch(0.446 0.043 257.281);
    --color-slate-700: oklch(0.372 0.044 257.287);
    --color-slate-800: oklch(0.279 0.041 260.031);
    --color-slate-900: oklch(0.208 0.042 265.755);
    --color-slate-950: oklch(0.129 0.042 264.695);
    --color-gray-50: oklch(0.985 0.002 247.839);
    --color-gray-100: oklch(0.967 0.003 264.542);
    --color-gray-200: oklch(0.928 0.006 264.531);
    --color-gray-300: oklch(0.872 0.01 258.338);
    --color-gray-400: oklch(0.707 0.022 261.325);
    --color-gray-500: oklch(0.551 0.027 264.364);
    --color-gray-600: oklch(0.446 0.03 256.802);
    --color-gray-700: oklch(0.373 0.034 259.733);
    --color-gray-800: oklch(0.278 0.033 256.848);
    --color-gray-900: oklch(0.21 0.034 264.665);
    --color-gray-950: oklch(0.13 0.028 261.692);
    --color-zinc-50: oklch(0.985 0 0);
    --color-zinc-100: oklch(0.967 0.001 286.375);
    --color-zinc-200: oklch(0.92 0.004 286.32);
    --color-zinc-300: oklch(0.871 0.006 286.286);
    --color-zinc-400: oklch(0.705 0.015 286.067);
    --color-zinc-500: oklch(0.552 0.016 285.938);
    --color-zinc-600: oklch(0.442 0.017 285.786);
    --color-zinc-700: oklch(0.37 0.013 285.805);
    --color-zinc-800: oklch(0.274 0.006 286.033);
    --color-zinc-900: oklch(0.21 0.006 285.885);
    --color-zinc-950: oklch(0.141 0.005 285.823);
    --color-neutral-50: oklch(0.985 0 0);
    --color-neutral-100: oklch(0.97 0 0);
    --color-neutral-200: oklch(0.922 0 0);
    --color-neutral-300: oklch(0.87 0 0);
    --color-neutral-400: oklch(0.708 0 0);
    --color-neutral-500: oklch(0.556 0 0);
    --color-neutral-600: oklch(0.439 0 0);
    --color-neutral-700: oklch(0.371 0 0);
    --color-neutral-800: oklch(0.269 0 0);
    --color-neutral-900: oklch(0.205 0 0);
    --color-neutral-950: oklch(0.145 0 0);
    --color-stone-50: oklch(0.985 0.001 106.423);
    --color-stone-100: oklch(0.97 0.001 106.424);
    --color-stone-200: oklch(0.923 0.003 48.717);
    --color-stone-300: oklch(0.869 0.005 56.366);
    --color-stone-400: oklch(0.709 0.01 56.259);
    --color-stone-500: oklch(0.553 0.013 58.071);
    --color-stone-600: oklch(0.444 0.011 73.639);
    --color-stone-700: oklch(0.374 0.01 67.558);
    --color-stone-800: oklch(0.268 0.007 34.298);
    --color-stone-900: oklch(0.216 0.006 56.043);
    --color-stone-950: oklch(0.147 0.004 49.25);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;
    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;
    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;
    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;
    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);
    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;
    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;
    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;
    --aspect-video: 16 / 9;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: color-mix(in oklab, currentColor 50%, transparent);
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  .not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .isolate {
    isolation: isolate;
  }
  .isolation-auto {
    isolation: auto;
  }
  .z-auto {
    z-index: auto;
  }
  .order-first {
    order: -9999;
  }
  .order-last {
    order: 9999;
  }
  .order-none {
    order: 0;
  }
  .col-auto {
    grid-column: auto;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }
  .col-start-auto {
    grid-column-start: auto;
  }
  .col-end-auto {
    grid-column-end: auto;
  }
  .row-auto {
    grid-row: auto;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }
  .row-start-auto {
    grid-row-start: auto;
  }
  .row-end-auto {
    grid-row-end: auto;
  }
  .float-end {
    float: inline-end;
  }
  .float-left {
    float: left;
  }
  .float-none {
    float: none;
  }
  .float-right {
    float: right;
  }
  .float-start {
    float: inline-start;
  }
  .clear-both {
    clear: both;
  }
  .clear-end {
    clear: inline-end;
  }
  .clear-left {
    clear: left;
  }
  .clear-none {
    clear: none;
  }
  .clear-right {
    clear: right;
  }
  .clear-start {
    clear: inline-start;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .m-auto {
    margin: auto;
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }
  .line-clamp-none {
    overflow: visible;
    display: block;
    -webkit-box-orient: horizontal;
    -webkit-line-clamp: unset;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .flow-root {
    display: flow-root;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .inline-table {
    display: inline-table;
  }
  .list-item {
    display: list-item;
  }
  .table {
    display: table;
  }
  .table-caption {
    display: table-caption;
  }
  .table-cell {
    display: table-cell;
  }
  .table-column {
    display: table-column;
  }
  .table-column-group {
    display: table-column-group;
  }
  .table-footer-group {
    display: table-footer-group;
  }
  .table-header-group {
    display: table-header-group;
  }
  .table-row {
    display: table-row;
  }
  .table-row-group {
    display: table-row-group;
  }
  .field-sizing-content {
    field-sizing: content;
  }
  .field-sizing-fixed {
    field-sizing: fixed;
  }
  .aspect-auto {
    aspect-ratio: auto;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-96 {
    height: calc(var(--spacing) * 96);
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-none {
    max-height: none;
  }
  .max-h-screen {
    max-height: 100vh;
  }
  .min-h-dvh {
    min-height: 100dvh;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-11 {
    width: calc(var(--spacing) * 11);
  }
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-5xl {
    max-width: var(--container-5xl);
  }
  .max-w-none {
    max-width: none;
  }
  .max-w-screen {
    max-width: 100vw;
  }
  .min-w-screen {
    min-width: 100vw;
  }
  .flex-auto {
    flex: auto;
  }
  .flex-initial {
    flex: 0 auto;
  }
  .flex-none {
    flex: none;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .shrink {
    flex-shrink: 1;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .grow {
    flex-grow: 1;
  }
  .basis-auto {
    flex-basis: auto;
  }
  .basis-full {
    flex-basis: 100%;
  }
  .table-auto {
    table-layout: auto;
  }
  .table-fixed {
    table-layout: fixed;
  }
  .caption-bottom {
    caption-side: bottom;
  }
  .caption-top {
    caption-side: top;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .border-separate {
    border-collapse: separate;
  }
  .origin-bottom {
    transform-origin: bottom;
  }
  .origin-bottom-left {
    transform-origin: bottom left;
  }
  .origin-bottom-right {
    transform-origin: bottom right;
  }
  .origin-center {
    transform-origin: center;
  }
  .origin-left {
    transform-origin: left;
  }
  .origin-right {
    transform-origin: right;
  }
  .origin-top {
    transform-origin: top;
  }
  .origin-top-left {
    transform-origin: top left;
  }
  .origin-top-right {
    transform-origin: top right;
  }
  .-translate-full {
    --tw-translate-x: -100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-full {
    --tw-translate-x: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-3d {
    translate: var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z);
  }
  .translate-none {
    translate: none;
  }
  .scale-3d {
    scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);
  }
  .scale-none {
    scale: none;
  }
  .rotate-none {
    rotate: none;
  }
  .transform {
    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }
  .transform-cpu {
    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }
  .transform-gpu {
    transform: translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }
  .transform-none {
    transform: none;
  }
  .animate-none {
    animation: none;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .touch-pinch-zoom {
    --tw-pinch-zoom: pinch-zoom;
    touch-action: var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,);
  }
  .resize {
    resize: both;
  }
  .resize-none {
    resize: none;
  }
  .resize-x {
    resize: horizontal;
  }
  .resize-y {
    resize: vertical;
  }
  .snap-none {
    scroll-snap-type: none;
  }
  .snap-mandatory {
    --tw-scroll-snap-strictness: mandatory;
  }
  .snap-proximity {
    --tw-scroll-snap-strictness: proximity;
  }
  .snap-align-none {
    scroll-snap-align: none;
  }
  .snap-center {
    scroll-snap-align: center;
  }
  .snap-end {
    scroll-snap-align: end;
  }
  .snap-start {
    scroll-snap-align: start;
  }
  .snap-always {
    scroll-snap-stop: always;
  }
  .snap-normal {
    scroll-snap-stop: normal;
  }
  .list-inside {
    list-style-position: inside;
  }
  .list-outside {
    list-style-position: outside;
  }
  .list-decimal {
    list-style-type: decimal;
  }
  .list-disc {
    list-style-type: disc;
  }
  .list-none {
    list-style-type: none;
  }
  .list-image-none {
    list-style-image: none;
  }
  .appearance-auto {
    appearance: auto;
  }
  .appearance-none {
    appearance: none;
  }
  .columns-auto {
    columns: auto;
  }
  .auto-cols-auto {
    grid-auto-columns: auto;
  }
  .auto-cols-fr {
    grid-auto-columns: minmax(0, 1fr);
  }
  .auto-cols-max {
    grid-auto-columns: max-content;
  }
  .auto-cols-min {
    grid-auto-columns: min-content;
  }
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-col-dense {
    grid-auto-flow: column dense;
  }
  .grid-flow-dense {
    grid-auto-flow: dense;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }
  .grid-flow-row-dense {
    grid-auto-flow: row dense;
  }
  .auto-rows-auto {
    grid-auto-rows: auto;
  }
  .auto-rows-fr {
    grid-auto-rows: minmax(0, 1fr);
  }
  .auto-rows-max {
    grid-auto-rows: max-content;
  }
  .auto-rows-min {
    grid-auto-rows: min-content;
  }
  .grid-cols-none {
    grid-template-columns: none;
  }
  .grid-cols-subgrid {
    grid-template-columns: subgrid;
  }
  .grid-rows-none {
    grid-template-rows: none;
  }
  .grid-rows-subgrid {
    grid-template-rows: subgrid;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }
  .place-content-around {
    place-content: space-around;
  }
  .place-content-baseline {
    place-content: baseline;
  }
  .place-content-between {
    place-content: space-between;
  }
  .place-content-center {
    place-content: center;
  }
  .place-content-end {
    place-content: end;
  }
  .place-content-evenly {
    place-content: space-evenly;
  }
  .place-content-start {
    place-content: start;
  }
  .place-content-stretch {
    place-content: stretch;
  }
  .place-items-baseline {
    place-items: baseline;
  }
  .place-items-center {
    place-items: center;
  }
  .place-items-end {
    place-items: end;
  }
  .place-items-start {
    place-items: start;
  }
  .place-items-stretch {
    place-items: stretch;
  }
  .content-around {
    align-content: space-around;
  }
  .content-baseline {
    align-content: baseline;
  }
  .content-between {
    align-content: space-between;
  }
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-normal {
    align-content: normal;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-stretch {
    align-content: stretch;
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-baseline {
    justify-content: baseline;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }
  .justify-normal {
    justify-content: normal;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-stretch {
    justify-content: stretch;
  }
  .justify-items-center {
    justify-items: center;
  }
  .justify-items-end {
    justify-items: end;
  }
  .justify-items-normal {
    justify-items: normal;
  }
  .justify-items-start {
    justify-items: start;
  }
  .justify-items-stretch {
    justify-items: stretch;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .space-y-reverse {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 1;
    }
  }
  .space-x-reverse {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 1;
    }
  }
  .divide-x {
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-y-reverse {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 1;
    }
  }
  .place-self-auto {
    place-self: auto;
  }
  .place-self-center {
    place-self: center;
  }
  .place-self-end {
    place-self: end;
  }
  .place-self-start {
    place-self: start;
  }
  .place-self-stretch {
    place-self: stretch;
  }
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }
  .justify-self-auto {
    justify-self: auto;
  }
  .justify-self-center {
    justify-self: center;
  }
  .justify-self-end {
    justify-self: flex-end;
  }
  .justify-self-start {
    justify-self: flex-start;
  }
  .justify-self-stretch {
    justify-self: stretch;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .scroll-auto {
    scroll-behavior: auto;
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-s {
    border-start-start-radius: 0.25rem;
    border-end-start-radius: 0.25rem;
  }
  .rounded-ss {
    border-start-start-radius: 0.25rem;
  }
  .rounded-e {
    border-start-end-radius: 0.25rem;
    border-end-end-radius: 0.25rem;
  }
  .rounded-se {
    border-start-end-radius: 0.25rem;
  }
  .rounded-ee {
    border-end-end-radius: 0.25rem;
  }
  .rounded-es {
    border-end-start-radius: 0.25rem;
  }
  .rounded-t {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .rounded-l {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-tl {
    border-top-left-radius: 0.25rem;
  }
  .rounded-r {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-tr {
    border-top-right-radius: 0.25rem;
  }
  .rounded-b {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-br {
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-bl {
    border-bottom-left-radius: 0.25rem;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-x {
    border-inline-style: var(--tw-border-style);
    border-inline-width: 1px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-s {
    border-inline-start-style: var(--tw-border-style);
    border-inline-start-width: 1px;
  }
  .border-e {
    border-inline-end-style: var(--tw-border-style);
    border-inline-end-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-b-2 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 2px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-dotted {
    --tw-border-style: dotted;
    border-style: dotted;
  }
  .border-double {
    --tw-border-style: double;
    border-style: double;
  }
  .border-hidden {
    --tw-border-style: hidden;
    border-style: hidden;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .border-solid {
    --tw-border-style: solid;
    border-style: solid;
  }
  .border-gray-500 {
    border-color: var(--color-gray-500);
  }
  .border-violet-800 {
    border-color: var(--color-violet-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-violet-800 {
    background-color: var(--color-violet-800);
  }
  .-bg-conic {
    --tw-gradient-position: in oklab;
    background-image: conic-gradient(var(--tw-gradient-stops));
  }
  .bg-conic {
    --tw-gradient-position: in oklab;
    background-image: conic-gradient(var(--tw-gradient-stops));
  }
  .bg-radial {
    --tw-gradient-position: in oklab;
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
  .bg-none {
    background-image: none;
  }
  .via-none {
    --tw-gradient-via-stops: initial;
  }
  .box-decoration-clone {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .box-decoration-slice {
    -webkit-box-decoration-break: slice;
    box-decoration-break: slice;
  }
  .decoration-clone {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .decoration-slice {
    -webkit-box-decoration-break: slice;
    box-decoration-break: slice;
  }
  .bg-auto {
    background-size: auto;
  }
  .bg-contain {
    background-size: contain;
  }
  .bg-cover {
    background-size: cover;
  }
  .bg-fixed {
    background-attachment: fixed;
  }
  .bg-local {
    background-attachment: local;
  }
  .bg-scroll {
    background-attachment: scroll;
  }
  .bg-clip-border {
    background-clip: border-box;
  }
  .bg-clip-content {
    background-clip: content-box;
  }
  .bg-clip-padding {
    background-clip: padding-box;
  }
  .bg-clip-text {
    background-clip: text;
  }
  .bg-bottom {
    background-position: bottom;
  }
  .bg-center {
    background-position: center;
  }
  .bg-left {
    background-position: left;
  }
  .bg-left-bottom {
    background-position: left bottom;
  }
  .bg-left-top {
    background-position: left top;
  }
  .bg-right {
    background-position: right;
  }
  .bg-right-bottom {
    background-position: right bottom;
  }
  .bg-right-top {
    background-position: right top;
  }
  .bg-top {
    background-position: top;
  }
  .bg-no-repeat {
    background-repeat: no-repeat;
  }
  .bg-repeat {
    background-repeat: repeat;
  }
  .bg-repeat-round {
    background-repeat: round;
  }
  .bg-repeat-space {
    background-repeat: space;
  }
  .bg-repeat-x {
    background-repeat: repeat-x;
  }
  .bg-repeat-y {
    background-repeat: repeat-y;
  }
  .bg-origin-border {
    background-origin: border-box;
  }
  .bg-origin-content {
    background-origin: content-box;
  }
  .bg-origin-padding {
    background-origin: padding-box;
  }
  .fill-none {
    fill: none;
  }
  .stroke-none {
    stroke: none;
  }
  .object-contain {
    object-fit: contain;
  }
  .object-cover {
    object-fit: cover;
  }
  .object-fill {
    object-fit: fill;
  }
  .object-none {
    object-fit: none;
  }
  .object-scale-down {
    object-fit: scale-down;
  }
  .object-bottom {
    object-position: bottom;
  }
  .object-center {
    object-position: center;
  }
  .object-left {
    object-position: left;
  }
  .object-left-bottom {
    object-position: left bottom;
  }
  .object-left-top {
    object-position: left top;
  }
  .object-right {
    object-position: right;
  }
  .object-right-bottom {
    object-position: right bottom;
  }
  .object-right-top {
    object-position: right top;
  }
  .object-top {
    object-position: top;
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-0\\.5 {
    padding-top: calc(var(--spacing) * 0.5);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-2\\.5 {
    padding-bottom: calc(var(--spacing) * 2.5);
  }
  .pb-6 {
    padding-bottom: calc(var(--spacing) * 6);
  }
  .pl-0 {
    padding-left: calc(var(--spacing) * 0);
  }
  .pl-0\\.5 {
    padding-left: calc(var(--spacing) * 0.5);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .text-center {
    text-align: center;
  }
  .text-end {
    text-align: end;
  }
  .text-justify {
    text-align: justify;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .text-start {
    text-align: start;
  }
  .align-baseline {
    vertical-align: baseline;
  }
  .align-bottom {
    vertical-align: bottom;
  }
  .align-middle {
    vertical-align: middle;
  }
  .align-sub {
    vertical-align: sub;
  }
  .align-super {
    vertical-align: super;
  }
  .align-text-bottom {
    vertical-align: text-bottom;
  }
  .align-text-top {
    vertical-align: text-top;
  }
  .align-top {
    vertical-align: top;
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .text-balance {
    text-wrap: balance;
  }
  .text-nowrap {
    text-wrap: nowrap;
  }
  .text-pretty {
    text-wrap: pretty;
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-normal {
    overflow-wrap: normal;
    word-break: normal;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .break-keep {
    word-break: keep-all;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }
  .text-clip {
    text-overflow: clip;
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .hyphens-auto {
    -webkit-hyphens: auto;
    hyphens: auto;
  }
  .hyphens-manual {
    -webkit-hyphens: manual;
    hyphens: manual;
  }
  .hyphens-none {
    -webkit-hyphens: none;
    hyphens: none;
  }
  .whitespace-break-spaces {
    white-space: break-spaces;
  }
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-violet-800 {
    color: var(--color-violet-800);
  }
  .text-white {
    color: var(--color-white);
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .normal-case {
    text-transform: none;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .not-italic {
    font-style: normal;
  }
  .font-stretch-condensed {
    font-stretch: condensed;
  }
  .font-stretch-expanded {
    font-stretch: expanded;
  }
  .font-stretch-extra-condensed {
    font-stretch: extra-condensed;
  }
  .font-stretch-extra-expanded {
    font-stretch: extra-expanded;
  }
  .font-stretch-normal {
    font-stretch: normal;
  }
  .font-stretch-semi-condensed {
    font-stretch: semi-condensed;
  }
  .font-stretch-semi-expanded {
    font-stretch: semi-expanded;
  }
  .font-stretch-ultra-condensed {
    font-stretch: ultra-condensed;
  }
  .font-stretch-ultra-expanded {
    font-stretch: ultra-expanded;
  }
  .diagonal-fractions {
    --tw-numeric-fraction: diagonal-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .lining-nums {
    --tw-numeric-figure: lining-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .oldstyle-nums {
    --tw-numeric-figure: oldstyle-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .ordinal {
    --tw-ordinal: ordinal;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .proportional-nums {
    --tw-numeric-spacing: proportional-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .slashed-zero {
    --tw-slashed-zero: slashed-zero;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .stacked-fractions {
    --tw-numeric-fraction: stacked-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .normal-nums {
    font-variant-numeric: normal;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .overline {
    text-decoration-line: overline;
  }
  .underline {
    text-decoration-line: underline;
  }
  .decoration-dashed {
    text-decoration-style: dashed;
  }
  .decoration-dotted {
    text-decoration-style: dotted;
  }
  .decoration-double {
    text-decoration-style: double;
  }
  .decoration-solid {
    text-decoration-style: solid;
  }
  .decoration-wavy {
    text-decoration-style: wavy;
  }
  .decoration-auto {
    text-decoration-thickness: auto;
  }
  .decoration-from-font {
    text-decoration-thickness: from-font;
  }
  .underline-offset-auto {
    text-underline-offset: auto;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .subpixel-antialiased {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }
  .accent-auto {
    accent-color: auto;
  }
  .scheme-dark {
    color-scheme: dark;
  }
  .scheme-light {
    color-scheme: light;
  }
  .scheme-light-dark {
    color-scheme: light dark;
  }
  .scheme-normal {
    color-scheme: normal;
  }
  .scheme-only-dark {
    color-scheme: only dark;
  }
  .scheme-only-light {
    color-scheme: only light;
  }
  .mix-blend-plus-darker {
    mix-blend-mode: plus-darker;
  }
  .mix-blend-plus-lighter {
    mix-blend-mode: plus-lighter;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .inset-ring {
    --tw-inset-ring-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentColor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-initial {
    --tw-shadow-color: initial;
  }
  .inset-shadow-initial {
    --tw-inset-shadow-color: initial;
  }
  .outline-hidden {
    --tw-outline-style: none;
    outline-style: none;
    @media (forced-colors: active) {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .blur-none {
    --tw-blur:  ;
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .drop-shadow {
    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow( 0 1px 1px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .drop-shadow-none {
    --tw-drop-shadow:  ;
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .invert {
    --tw-invert: invert(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .sepia {
    --tw-sepia: sepia(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur {
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-none {
    --tw-backdrop-blur:  ;
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-grayscale {
    --tw-backdrop-grayscale: grayscale(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-invert {
    --tw-backdrop-invert: invert(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-sepia {
    --tw-backdrop-sepia: sepia(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .transition-discrete {
    transition-behavior: allow-discrete;
  }
  .transition-normal {
    transition-behavior: normal;
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-linear {
    --tw-ease: linear;
    transition-timing-function: linear;
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-auto {
    will-change: auto;
  }
  .will-change-contents {
    will-change: contents;
  }
  .will-change-scroll {
    will-change: scroll-position;
  }
  .will-change-transform {
    will-change: transform;
  }
  .contain-inline-size {
    --tw-contain-size: inline-size;
    contain: var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,);
  }
  .contain-layout {
    --tw-contain-layout: layout;
    contain: var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,);
  }
  .contain-paint {
    --tw-contain-paint: paint;
    contain: var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,);
  }
  .contain-size {
    --tw-contain-size: size;
    contain: var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,);
  }
  .contain-style {
    --tw-contain-style: style;
    contain: var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,);
  }
  .contain-content {
    contain: content;
  }
  .contain-none {
    contain: none;
  }
  .contain-strict {
    contain: strict;
  }
  .content-none {
    --tw-content: none;
    content: none;
  }
  .forced-color-adjust-auto {
    forced-color-adjust: auto;
  }
  .forced-color-adjust-none {
    forced-color-adjust: none;
  }
  .outline-dashed {
    --tw-outline-style: dashed;
    outline-style: dashed;
  }
  .outline-dotted {
    --tw-outline-style: dotted;
    outline-style: dotted;
  }
  .outline-double {
    --tw-outline-style: double;
    outline-style: double;
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .outline-solid {
    --tw-outline-style: solid;
    outline-style: solid;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .backface-visible {
    backface-visibility: visible;
  }
  .divide-x-reverse {
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 1;
    }
  }
  .duration-initial {
    --tw-duration: initial;
  }
  .ease-initial {
    --tw-ease: initial;
  }
  .perspective-none {
    perspective: none;
  }
  .perspective-origin-bottom {
    perspective-origin: bottom;
  }
  .perspective-origin-bottom-left {
    perspective-origin: bottom left;
  }
  .perspective-origin-bottom-right {
    perspective-origin: bottom right;
  }
  .perspective-origin-center {
    perspective-origin: center;
  }
  .perspective-origin-left {
    perspective-origin: left;
  }
  .perspective-origin-right {
    perspective-origin: right;
  }
  .perspective-origin-top {
    perspective-origin: top;
  }
  .perspective-origin-top-left {
    perspective-origin: top left;
  }
  .perspective-origin-top-right {
    perspective-origin: top right;
  }
  .ring-inset {
    --tw-ring-inset: inset;
  }
  .transform-3d {
    transform-style: preserve-3d;
  }
  .transform-border {
    transform-box: border-box;
  }
  .transform-content {
    transform-box: content-box;
  }
  .transform-fill {
    transform-box: fill-box;
  }
  .transform-flat {
    transform-style: flat;
  }
  .transform-stroke {
    transform-box: stroke-box;
  }
  .transform-view {
    transform-box: view-box;
  }
  .hover\\:border-gray-800 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-gray-800);
      }
    }
  }
  .hover\\:bg-violet-200 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-violet-200);
      }
    }
  }
  .hover\\:bg-violet-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-violet-700);
      }
    }
  }
  .focus\\:outline-hidden {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
      @media (forced-colors: active) {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
  .active\\:bg-violet-300 {
    &:active {
      background-color: var(--color-violet-300);
    }
  }
  .active\\:bg-violet-500 {
    &:active {
      background-color: var(--color-violet-500);
    }
  }
  .dark\\:border-white {
    &:where(.dark, .dark *) {
      border-color: var(--color-white);
    }
  }
  .dark\\:bg-gray-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-700);
    }
  }
  .dark\\:bg-gray-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-800);
    }
  }
  .dark\\:text-black {
    &:where(.dark, .dark *) {
      color: var(--color-black);
    }
  }
  .dark\\:text-gray-300 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-300);
    }
  }
  .dark\\:text-gray-400 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-400);
    }
  }
  .dark\\:text-gray-800 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-800);
    }
  }
  .dark\\:text-gray-900 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-900);
    }
  }
  .dark\\:text-gray-950 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-950);
    }
  }
  .dark\\:text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white);
    }
  }
  .dark\\:shadow-md {
    &:where(.dark, .dark *) {
      --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .dark\\:shadow-white {
    &:where(.dark, .dark *) {
      --tw-shadow-color: var(--color-white);
    }
  }
  .dark\\:inset-shadow-gray-800 {
    &:where(.dark, .dark *) {
      --tw-inset-shadow-color: var(--color-gray-800);
    }
  }
  .dark\\:inset-shadow-gray-950\\/70 {
    &:where(.dark, .dark *) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-950) 70%, transparent);
    }
  }
  .dark\\:hover\\:border-white {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-white);
        }
      }
    }
  }
  .dark\\:hover\\:bg-violet-700 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-violet-700);
        }
      }
    }
  }
  .dark\\:active\\:bg-violet-500 {
    &:where(.dark, .dark *) {
      &:active {
        background-color: var(--color-violet-500);
      }
    }
  }
}
* {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
  initial-value: rotateX(0);
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
  initial-value: rotateY(0);
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
  initial-value: rotateZ(0);
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
  initial-value: skewX(0);
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
  initial-value: skewY(0);
}
@property --tw-pan-x {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pinch-zoom {
  syntax: "*";
  inherits: false;
}
@property --tw-scroll-snap-strictness {
  syntax: "*";
  inherits: false;
  initial-value: proximity;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-contain-size {
  syntax: "*";
  inherits: false;
}
@property --tw-contain-layout {
  syntax: "*";
  inherits: false;
}
@property --tw-contain-paint {
  syntax: "*";
  inherits: false;
}
@property --tw-contain-style {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
 `
    