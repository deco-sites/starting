---
description: Learn how to manage an external website or application with Deco
---

At deco.cx, we offer the functionality to create and manage websites intuitively through the Deco admin. Each page of your site is represented by a set of structured data in JSON format, capturing all the content present on that page. All changes made in the content management system (CMS) for a specific page are immediately reflected in the corresponding JSON of that page. This real-time update process allows external applications or websites to access and incorporate these changes, enabling seamless integration between different systems and environments, including staging and production environments.

The update flow is illustrated in the diagram below:

![alt text](/docs/headless-cms/change-flow.png)

## Fetching Deco Site Content in External Sites or Applications

To access the content of your Deco site in JSON format from an external site or application, you can use a simple GET request to the site URL, including an `asJson` query string.

For example, when accessing the homepage of your storefront site, you will see the fully rendered page, ready for use, with all visual and interactive elements:

![Home page store front](/docs/headless-cms/site.png)

However, if you want to access only the structured data of the page to use it in a different context, such as a mobile application or integration with another system, simply add the query string `?asJson` to the URL. This will result in a JSON response containing the structured data corresponding to the page's content, allowing easy integration and manipulation of this data in your external application:

![JSON response on request with ?asJson query](/docs/headless-cms/asjson.png)

This "headless" approach to the Deco CMS offers flexibility and power, allowing you to reuse your site's content in a variety of contexts and platforms.
