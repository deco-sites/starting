---
description: Adding a blog
since: 1.33.2
---

In this documentation, we will add an `App` to your site. An `App` allows 
you to add new functionalities, sections and integrations to your site in 
a straightforward manner.

1. Acess the Apps page

To add an app to your site, click on the Apps tab. You will see all apps 
available. In this case, we are going to add the Weather App, which has
a loader that gives you the temperature of a certain local. A Loader in deco.cx 
is a Typescript function that returns data typically needed in a Section.

2. Install the app

Click on the switch button and the app will be installed in your site.

![Install app](/docs/getting-started/adding-a-blog/install-app.png)

3. Use the app funcionalities

To use the app, we will create a section that varies its text according to
the temperature of the user. To do this, we will use the concept of variants
and matchers.

A variant intuitively is a variation of a section or a page. It allows 
you to segment content based on certain conditions, enabling you to customize 
and personalize your page for different user segments.

A matcher is the responsible to evaluate specific conditions and segment your 
audience based on various criteria.

The Weather App offers a matcher that receives a temperature range and a
temperature value and evaluates whether the temperature is in the range
or not.

3.1 Create a new section

Click on the "Create new Section" button on the Sections page.

![]()

A section will be created with one property, and you can see
its code and change the property value.

![]()

3.2 Use the section in a page

Click on "Add [Section]" button to add the section that we created.

![]()

3.3 Create a variant of the section