---
description: How to create and track an A/B test?
---

# How to Create and Track an A/B Test?

A/B tests for websites involve splitting the audience and directing them to two
different versions of the site to see which one generates more engagement.

Let's explore each step:

- Creating an experiment
- Traffic segmentation
- Editing your variant
- Creating events and collecting data
- Funnel and results
- GA4 Setup for A/B Testing

## Creating an Experiment

In the sidebar, click on "Experiments"

![Experiments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/7060003d-e0ae-4ec1-8a22-a7a88d0dfe71)

This screen lists your experiments. Click on "Create new Experiment"

Some information will be required:

- Name
- Description
- Traffic (percentage that will go to the new version)

## Traffic Segmentation

You have just chosen the traffic percentage for your test, but you can customize
this even further.

The creation of the Experiment has generated a new Segment, which can be checked
in the sidebar, under "Segments":

![Segments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/f25a1aab-3c16-45a3-8083-742d88b52e1e)

Thus, you can also combine segments to conduct tests for specific audiences:

Select the created test and make the desired changes.

Examples of segmentation:

- **50%** of **Mobile** traffic
- **30%** of **Facebook Campaign** traffic
- **10%** of traffic from **Rio de Janeiro**

## Editing Your Variant

Now with the segment created, you can choose whether to test a complete page or
a specific section.

Create a variant:
![Create variants](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ef0f35c3-e98a-4523-96df-e811102aafa6)

Select the segment:
![Select a segment](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/e9cd11bd-c389-448a-97f5-f915e18e6712)

Make the desired changes:
![Variants](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/c3eeba19-8163-4892-923b-4323c6c3216a)

## Creating Events and Collecting Data

Templates start with some events, but you can create new ones.

See how to create them through code or through the panel:

Example in code:

```javascript
import { sendEvent } from "./sdk/analytics.tsx";

<button
  onClick={() => sendEvent({ name: "add_to_cart" }, params)}
>
  Add to Cart
</button>;
```

## Funnel and Results

Additionally, it is possible to check the results of the A/B Test

On the screen that lists the Experiments, select the desired Test.

Check out the features:

### Sample Size

Indication of the minimum sample size for the test to be considered
statistically significant.

### Probability

See the probability of your variation being the winner relative to the other.

### Goal Setting

Select the goals you want to compare, there is no limit.

### Filter by Period

Filter by period to understand if there were any outliers during the test.

### Funnel

See the conversion rate of each of your metrics to understand where you are
losing your user.

### Real-Time

Data is transferred in real-time, no more waiting a day or two to analyze them.

![Experiments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/6ddc740d-9590-431b-b1e7-f0a0130bc5f6)

![Experiments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/cc637298-e938-494c-9253-b7d1bef6f99a)

## GA4 Setup for A/B Testing

To ensure data consistency while navigating an A/B test on deco.cx, we use a cookie called deco_segment.

This cookie lasts for 30 days by default and can be used to determine which version the user is in.

All data sent to the deco.cx Analytics is already segmented by version.

However, for this to also occur in GA4, it is necessary to check this cookie and segment the events based on that information.

 - Example of cookie:
```
deco_segment=TdCJTIyYWN0aXZlJTIyJTNBJTVCJTVEJTJDJTIyaW5hY3RpdmVEcmF3biUyMiUzQSU1QiUyMlRlc3RlJTIwVGF2YW5vJTIyJTVEJTdE
```

 - To extract readable data from this hash, use the following function:
```javascript
getData(myCookie) {
	return JSON.parse(decodeURIComponent(atob(myCookie)))
}

```

 - This will return an object like:
```json
{
	active: [],
	inactiveDrawn: ['Teste Tavano']
}
```

This way, in GTM, you can identify whether the user is participating in Test X, allowing for the segmented and accurate dispatch of events.