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

## 2000s
In the 2000s, people started to realize that the web is a great place for doing business. The sheer availability and reach of the web, allowed business to reach customers on distant lands. One problem, however, was that creating complex and dynamic interactions, like login forms and interactive checkout experiences, required more from the web than plain html. JavaScript gained popularity in this decade, however, it wasn't powerfull enough for managing the life cycle of entire applications. That's when we see the rise of smart servers, like php, django and rails. 
These frameworks allowed developers to generate specific html content for specific users, unlocking custom experiences, like a new feature for payed users for instance. 

1. How client/server works. How to create a 
2. How 

# Deco rendering pipeline
