---
description: Creating Headless A/B Testing
---

## Who is this content for?

This content is for those who do not yet have their site on deco.cx and want to
utilize the A/B Testing Feature headlessly, without migrating technology.

If you already have your site on deco.cx, the creation of A/B Testing is
explained in this other
[documentation](/docs/en/developing-capabilities/apps/ab-test).

## How to start?

1 - Creating a deco.cx project

2 - Understanding A/B Testing

3 - Event Configuration

4 - Monitoring Results

5 - Go Live

## Creating a deco.cx project

Access the site [creation link](https://admin.deco.cx/spaces/new).

Choose the **SDK** template.

![deco.cx sdk Template](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ffd8f072-daf7-48cc-ab14-ad6b9297f903)

After creation, the project is not yet in any team, you can associate it with a
team using the `Save site to your team`.

## Understanding A/B Testing

With the site created and associated with a team, search for `abTest` in the
search bar.

Select the option shown in the image:

![AbTest Search](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/7658eb54-1f8f-49ca-8483-341e59200a9f)

You should see a block like this:

![AbTest Block](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/d0ee14cb-5ee4-4b3f-a56a-b5f6b4c84eb9)

Then, define a name for your test and configure the variants.

### Variants

Variants are code versions that will execute randomly for a portion of your
audience.

Here, you have the option to add JavaScript and/or CSS to customize your user's
experience.

Examples:

JavaScript to run

```js
document.querySelector("#my-button").textContent = "Buy!";
```

CSS to run

```css
#my-button {
  color: red !important;
}
```

## Event Configuration

Event configuration is essential for A/B Testing; now, you will see how to
create a specific event for your test.

In the same Variant configuration screen, find the `Tracked Elements` field and
click to add one.

You should see something like:

![Tracked Elements](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/3933da2b-e55b-4f75-892b-345fd5e1d3d1)

Now, simply find the `CSS selector` of the element you want to create an event
for and choose the event name.

## Monitoring Results

You can monitor the results of your test with the metrics you created directly
through the deco.cx panel.

> Important: To monitor the results of the Test, an upgrade to your team's plan
> may be necessary, check at [Pricing](https://deco.cx/en/pricing).

1 - Click on the `Experiments` tab.

2 - Click on `Create New Experiment`.

3 - Create an experiment with the same name you used for your test.

4 - Monitor the results.

To understand more about the results screen, look at this
[documentation](/docs/en/developing-capabilities/apps/ab-test#funnel-and-results).

## Go-Live

Before deploying the code to production, fill in a field called
`plausibleDomain` with the same domain registered in the `Analytics` tab of your
deco.cx dashboard.

To apply all this to your site:

- Click on `Publish`
- Insert this script into the `<head>` of your site:

```html
<script src="https://yoursite.deco.site/abTest.js" defer="true"></script>
```

## Next Steps

Features that are not yet available, but we are already working to release:

- Traffic Configuration

In A/B testing for deco.cx sites, it is already possible to define the amount of
traffic; we are working to implement this in the SDK as well.

- Parallel Tests

In A/B testing for deco.cx sites, it is already possible to run more than one
test at the same time; we are working to implement this in the SDK as well.

- A/B/C/... Tests

We are working to implement the possibility of tests with more than two
versions.
