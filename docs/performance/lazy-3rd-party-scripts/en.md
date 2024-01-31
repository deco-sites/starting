---
description: Learn how to use third-party scripts on your website without sacrificing performance.
---

### Summary

> The use of third-party scripts can have a significant impact on website performance.
> These scripts often operate in a blocking manner and can hinder page loading times.
> 
> To reduce the time spent on these scripts, it is recommended to:
> 
> 1. Avoid using third-party scripts whenever possible
> 2. Delay the loading of scripts until after user interaction
> 3. Use async or defer attributes for scripts
> 4. Preload connection to the script's origin

# Delaying the loading of scripts.

If the script in question is not a priority, meaning it can wait for user interaction or does not represent a vital functionality for the website, a recommendation is to delay its loading until the user interacts with the site.

Each script may require a different strategy to delay its execution. Below is an example of a common strategy ([source](https://metabox.io/delay-javascript-execution-boost-page-speed/)) to delay the script so that it is only executed after user interaction followed by a delay:

```tsx
<script>
{
    const load = () => {
        // YOUR SCRIPT CONTENT
    }
    const timer = setTimeout(load, 5000);
    const trigger = () => {
        load();
        clearTimeout(timer);
    }
    const events = ["mouseover","keydown","touchmove","touchstart"];
    events.forEach(e => window.addEventListener(e, trigger, {passive: true, once: true}));
}
</script>
```

Another alternative is to use the Intersection API, so that the code is executed only when a certain element is in view (useful for things that should only be executed after the user scrolls on a page).

```jsx
const elem = document.getElementById(id);
const observer = new IntersectionObserver((items) => {
   // YOUR SCRIPT CONTENT
   observer.unobserve(elem);
   }
);

observer.observe(elem);
```

# Async and Defer in Scripts

The presence of a `<script src="script.js">` tag causes a delay in the execution of DOM loading. This is because the browser will respect the order of the scripts to download and execute them.

If the script itself does not manipulate the DOM, it is a strong candidate to be delayed using async. An async script will be downloaded asynchronously and then executed at the first opportunity before the DOM is loaded:

```html
<script async src="script.js">
```

To execute the script only after the HTML parsing is actually complete, you can use the defer attribute:

```html
<script defer src="script.js">
```

# Preload connection to the script's origin

If possible, it is recommended to serve the script locally (in the `static` folder). If the script is hosted on another domain, the recommendation is to use prefetch to speed up the resolution of the script's server DNS:

```jsx
<link rel="dns-prefetch" href="http://example.com">
```

If the script is critical, it is possible to signal, even for the browser to start a connection with the origin, in order to make this connection even more efficient:

```jsx
<link rel="preconnect" href="http://example.com">
```

> **important**: use preconnect only when necessary and for scripts with a significant impact.