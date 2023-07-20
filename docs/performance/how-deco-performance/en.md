---
description: How to achieve a good performance using deco
since: 1.0.0
---

In the era of the web being dominated by mobile devices, the development community still strugles on delivering good experiences for slow mobile devices with unreliable 3g connections and lack of RAM memory. Frameworks focusing on a JavaScript first approach, like SPAs (Single Page Application) have difficulties on providing fast load times to these devices due to the great amount of initial bundle sizes (JS) required for rendering a website. 

Deco addresses the modern, mobile first, web by relying as little as possible on JavaScript running on the browser, making websites feel way more responsive even on modest hardware. Removing unecessary JavaScript, alongside other optimizations, allow developers to create amazing digital experiences. In this article you will learn how deco's rendering pipeline works and how you can take advantage of it to design and build performatic websites.

# History

To understand deco's approach to web development, you first need to understand how we used to do web on the past. In this section you will travel back in time to the 90s, 2000s and 2010s. 

## 90s
<img width="618" alt="Screenshot 2023-07-14 at 14 35 38" src="https://github.com/deco-sites/starting/assets/1753396/ca8917e9-7f18-498e-b1e8-7b2936b49bae">

Web development in the 90s was pretty straight forward. Create a `.html` file, write its content in plain html, link it to images and style it with a `.css` file. Place all files in one folder and upload it to your server. When users visit your website, the server responds with the static content and people can access your static content. 
<img width="1149" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/9c47c25b-f212-45a9-bee6-92e1ad7d97ba">


## 2000s
In the 2000s, people started to realize that the web is a great place for doing business. The sheer availability and reach of the web, allowed business to reach customers on distant lands. One problem, however, was that creating complex and dynamic interactions, like login forms and interactive checkout experiences, required more from the web than plain html. JavaScript gained popularity in this decade, however, it wasn't powerfull enough for managing entire applications. That's when frameworks like django and rails gained popularity. 
These frameworks allowed developers to generate specific html content for specific users, unlocking custom experiences, like a new feature for payed users for instance. 

The schematics below show how a page is rendered using these frameworks:
<img width="867" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/07386386-085d-4440-9cbe-c77dadb22b84">

When the browser asks for a page, the server doesn't return a static `.html` stored in a folder. It now generates dynamically the html based on the user asking for that page. Also, the developer links some JavaScript to the generated `.html` to add client-side interactivity. 

## 2010s
The issue with the aforementioned stack is that the developer needs to be fluent in 4 different languages, HTML/CSS/JS and their framework language (python, ruby etc). Also, as the website grows in complexity, maintaining those isolated `.js` files becomes more and more difficult. To circunvent these issues, JS-first frameworks, like React and Angular started to appear. These frameworks usually work around the idea of a single page application (SPA) and use a server-side javascript runtime called Node.JS to run the framework server side. 
The nice thing about this stack is that you completely remove the need of a forth language, sticking to the good&old HTML/CSS/JS. Also, the code becomes way more maintainable since you don't serve the JS as they are on the project, but you go through a "build" phase where the code base get compiled into multiple `.js` files that are then served to the browser. These files are called a bundle. Below you can see a diagram showing the process of writing a file in React and it being used for the browser

The issue with the architecture above is that you ship the same code twice to browser, one in html format and another in JS format. This overuse of JS, alongside a process called [hydration]() makes initial boot times of websites using SPA, in general, worse than previous architectures. Another drawback of this architecture is that issues like memory leaks and overall RAM memory usage require attention. This is because navigations do not restart the JavaScript engine, making mistakes unforgiven.
<img width="629" alt="Screenshot 2023-07-16 at 11 57 32" src="https://github.com/deco-sites/starting/assets/1753396/f192e31f-1455-47b3-a3f5-e595020cf24c">


## 2020s
The whole rationale behind SPAs was that at every generation, consumer electronics processing power would grow and these ineficiencies in boot times and memory consumption would be irrelevant. Although being true, this assumption did not realize in emerging markets where cheap mobile devices attached to poor network conditions can be found. Also, this assumption failed to take in consideration that websites grow in complexity, and although we have much better hardware today, websites are much more demanding, making the issues of boot time and memory still relevant in the 2020s.

Many different approaches to solving these SPA performance issues are showing up on the web, while maintaining the constraints of using only HTML/CSS/JS as language stack. Next.JS is trying [React's Server Components](https://legacy.reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html), Qwik introduced [Resumability](https://qwik.builder.io/docs/concepts/resumable/) and Sveltekit bets on compiler optimizations.
 
At deco, we bet on [Fresh's](https://fresh.deno.dev/) and [Astro's](https://astro.build/) [island architecture](https://www.patterns.dev/posts/islands-architecture). This architecture abandons the notion of SPA and goes back into the roots of web development into a multi page application (MPA), extensively using browser and HTML features, shipping less JavaScript and thus using less resources from user devices. Islands architecture is well suited for websites with heavy use of texts and images, with some interactive content spread throughout the static content, hence creating islands of interactivity. Websites falling on this category are ecommerces, blogs, portifolios, restaurant menus etc. In particular, ecommerce is a great match for this architecture since product images, prices and descriptions can be rendered on the server, while add-to-cart, favorites and search buttons can load a small, specific JavaScript. 

Next section provides a deep dive into how deco island architecture and rendering pipeline works.

# Deco rendering pipeline
The diagram below shows how deco's rendering pipeline work. 
<img width="647" alt="Screenshot 2023-07-16 at 11 58 00" src="https://github.com/deco-sites/starting/assets/1753396/5ff3986f-c7c9-43c3-aa06-39858f795585">

// TODO: explain the diagram.

To best use this architecture for performance, try keeping the number of islands small and each island as light as possible. To achieve this, try thinking if the interaction can be done via anchor tags navigations, form submitions or CSS state selectors, like `:hover`, `:checked` etc.
