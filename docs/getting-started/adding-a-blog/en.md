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

The Weather App brings us a section that renders a message with the
current temperature. Besides the section, this app also has a loader, a 
Typescript function that returns data. This specific loader returns the 
temperature of a given location (or of the current location if no location
is passed). Let's use them both and see how they can be integrated.

3. Use the app funcionalities

3.1 Go to WhatsTheTemperature Section

Go to the Sections Page and click on the WhatsTheTemperature Section. You 
can filter the list by the app.

![]()

Open the section properties 