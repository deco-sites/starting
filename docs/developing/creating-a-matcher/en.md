---
description: Learn about Matchers and their role in empowering Variants in deco
since: 1.18.0
---

# Matchers: Empowering Variants

**Matchers** are essential building blocks in deco that play a pivotal role in empowering [Variants](/docs/en/getting-started/variants). They allow you to evaluate specific conditions and segment your audience based on various criteria. By leveraging Matchers, you can create personalized and dynamic experiences for your users. When you create a new **Matcher Block** you may call it a [Segment](/docs/en/concepts/segment).

## Understanding Matchers

In deco, **Matchers** are created using _functions_ within your site's code. They are powerful tools that enable you to define conditions and evaluate whether a user belongs to a particular segment. **Matchers** serve as the foundation for targeting specific user groups and personalizing content based on their characteristics or behaviors.

_Standard Matchers_ are readily available in deco and cover a range of common conditions such as user traits, date and time, device type, geographic location, and random selection (A/B testing). These predefined Matchers offer _flexibility_ and allow you to customize content variations based on these conditions.

However, the power of Matchers extends beyond the standard options. deco provides the capability to create **custom Matchers** to meet the specific needs of your business. With custom Matchers, you can extend deco's functionality to integrate external data sources, such as fetching data from a Salesforce ERP system, and then use that data to determine the segment to which a user belongs.

## Customizing Matchers to Meet Your Needs

Creating a custom Matcher involves **writing code within your site's codebase**. By leveraging the flexibility of custom Matchers, you can tap into external APIs, databases, or any other data source to gather information about your users and make informed decisions about their segmentation.

For example, let's say you want to use data from a Salesforce ERP system to determine which segment a user belongs to. You can write a [loader](/docs/en/concepts/loader) that integrates with the Salesforce API, retrieves relevant user data, and evaluates the conditions based on that data and connect this loader to your custom Matcher. This allows you to dynamically segment users based on their Salesforce data, opening up new possibilities for personalization and targeted content delivery.

With the ability to create custom **Matchers**, you have the flexibility to adapt deco to suit your site's specific requirements. You can leverage external data sources, perform complex calculations, and implement intricate logic to determine user segmentation and deliver tailored experiences.

## Developing a new Matcher

In your repository, matchers are located within the `matchers` folder, similar to sections and loaders. Let's create a new matcher called `MyMatcher.ts` to illustrate the process.

The signature of our matcher will follow this structure:

```ts
import { MatchContext } from "$live/blocks/matcher.ts";

export interface Props {
}

/**
 * @title My Matcher
 */
export default function MyMatcher(
  props: Props,
  ctx: MatchContext,
) {
  return true;
}
```

In the example above, the `MyMatcher` function accepts `props` as the input, allowing you to pass any necessary data to the matcher. Additionally, it receives a `ctx` object of type `MatchContext`, which contains the request information. You have the flexibility to perform any desired operations within the matcher function and return a boolean value based on the evaluation.

Let's take a look at the `MatchDate` example from the deco library:

```ts
/**
 * @titleBy start
 */
export interface Props {
  /**
   * @format date-time
   */
  start?: string;
  /**
   * @format date-time
   */
  end?: string;
}

/**
 * @title Date Matcher
 */
const MatchDate = (props: Props) => {
  const now = new Date();
  const start = props.start ? now > new Date(props.start) : true;
  const end = props.end ? now < new Date(props.end) : true;
  return start && end;
};

export default MatchDate;
```

In this example, the `MatchDate` function serves as a Matcher. It accepts `props` as input, which includes `start` and `end` properties. The function evaluates whether the current date falls within the specified date range. If no `start` or `end` value is provided, it defaults to `true`. The `MatchDate` function returns a boolean value based on the evaluation.

Matchers can also have a "sticky" behavior, which is particularly useful for A/B testing scenarios. To make a Matcher sticky on the user's session, you can export a constant named `sticky` with the value `"session"`, as shown below:

```ts
export const sticky = "session";
```

Here is an example of the `MatchRandom` implementation using the sticky session feature:

```ts
/**
 * @title ABTest {{{percentage traffic}}}
 */
export interface Props {
  traffic: number;
}

// Once selected, the session will reuse the same value
export const sticky = "session";

/**
 * @title Random Matcher
 */
const MatchRandom = ({ traffic }: Props) => {
  return Math.random() < traffic;
};

export default MatchRandom;
```

In the `MatchRandom` example, the matcher function `MatchRandom` accepts `traffic` as a prop, representing the percentage of traffic that should match the condition. By generating a random number between 0 and 1, the function determines whether the generated value is less than the specified `traffic` percentage. The Matcher returns `true` or `false` based on this evaluation.

Matchers provide great flexibility to customize and extend deco's functionality to meet your specific needs. With the ability to create custom Matchers, you can integrate external data sources, perform complex calculations, and implement intricate logic to determine user segmentation and deliver personalized experiences.

## Harnessing the Power of Matchers in Variants

**Matchers** form the backbone of Variants in deco. By _combining Matchers with different conditions_, you can create targeted content variations for specific user **segments**. **Variants** enable you to modify and personalize content dynamically based on the evaluation of **Matchers**.

When configuring **Variants**, you can select the appropriate Matcher for each segment and define the conditions that determine whether a user belongs to that segment. By utilizing Matchers in Variants, you can fine-tune the user experience, optimize content delivery, and deliver personalized interactions.
