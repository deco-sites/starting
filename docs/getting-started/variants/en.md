---
description: Learn how to create content variation based on specific conditions
since: 1.18.0
---

# Overview

**Variants** allow you to **segment** content based on certain _conditions_, enabling you to customize and personalize your page for different user _segments_. For example, you can create a variant to change your page layout every **Friday** for **50% of your users**. By utilizing variants, you can dynamically modify and target content to specific segments of your audience.

**Variants** are powered by **Matchers**, which are _blocks_ used to evaluate specific _conditions_ based on _user traits_, _date and time_, _random selection_ (A/B Tests), _user navigation history_, _user device_, or _any external information that can be extracted from the request_. **Matchers** are configured to determine whether a user belongs to a particular **Segment** or not. **Segments** refer to a portion of your site's users that satisfy the defined conditions set by the matchers. A user can belong to multiple **segments** simultaneously. For example, a user can be part of the `São Paulo` segment, which targets users located in `São Paulo`, while also being part of an experiment that includes 50% of the users. **Segments** can be combined to create more specific targeting criteria.

**Matchers** can be used _inline_ or saved with a **specific name**. The main difference between the two approaches is that a saved matcher will be evaluated only once and its result will remain consistent throughout the request cycle. This means that once a matcher is evaluated as either `true` or `false` for a particular user's page view, it will maintain that value for the entire request.

This behavior allows you to reuse the **same matcher result across multiple variants within the same page or in different places throughout your site**. By doing so, you can ensure consistent behavior and avoid redundant evaluations of the same condition.

Furthermore, some Matchers have a `sticky` behavior, meaning that the result of the matcher can be stored in the user's session and remain consistent until the session ends. This is particularly useful for AB tests, where users are assigned to a specific variant and should have a consistent experience throughout their session.

By leveraging Matchers and their capabilities, you can create dynamic and personalized experiences for your users while optimizing performance by reducing redundant evaluations and maintaining consistency across variants. To read more about how to create new matchers check our [Matchers Documentation](/docs/en/concepts/matcher).

> Currently we do not supported other variants than Page Sections, this feature will be added in the future.

## Step by step

1. First, log in to the deco Admin. Once you're logged in, you can access the _site_ you want to work with.
2. Go to the `Pages` section, which can be found in the top bar of the Admin interface.

![Page list](https://github.com/deco-cx/apps/assets/882438/801edff7-7e6e-4606-8556-bcaf4a2bfec8)

3. Select the page you want to work with by clicking on it.

4. Once you're inside the page, locate the flag icon (`🏴`) on the right side of the "Sections" label. (use the same button to remove all variants).

![Create variant](https://github.com/deco-cx/apps/assets/882438/1989b41d-d959-488b-b863-c7b697fa1754)

5. At this point, two new variants will be added to the page. The last variant (`Default`) represents the current page and always evaluates to true, while the first variant is created without a selected condition. Let's choose a condition for this variant.



6. Click on the first variant in the list.
7. Select the `Condition` option and choose `Device Matcher`.
8. Select the `Mobile` option and ensure that you have the `Desktop` viewport selected in the Admin Preview.

![Select matcher](https://github.com/deco-cx/apps/assets/882438/c096a2fd-a9e1-4aca-87a9-99da8ca2d9d0)

9. Make any visual changes to the page that you want to differentiate for this variant (e.g., add a carousel to the top of the page). Note that the current preview reflects the changes made for the selected variant.

![Changing page for mobile users](https://github.com/deco-cx/apps/assets/882438/8f21d149-fd51-45e8-9d74-73c27fce1a56)

10. Publish your changes and switch between variants to observe their differences.

11. Go to your site and change the viewport to mobile and observe that the modified page for the variant is now visible.

![View your changes](https://github.com/deco-cx/apps/assets/882438/4e18d62b-fbaa-49e0-bf39-72d002a582f8)

## Explanation

When you have multiple variants within a single page, deco automatically previews the selected variant by default. If no variant is selected, deco shows you what the user would see if they were assigned to the variant. This allows you to navigate between selected variants and visualize what the user experience would be like for each variant.

You can also have a variant inside a variant. You can use different matchers or a combination of them.

## A/B Tests

You can create **A/B Tests** manually by selecting the `Random Matcher` condition and configuring the percentage of traffic to be split. Alternatively, if you don't have a `Random Matcher` condition being used, our Publish button will prompt you to create a new test automatically. The result is exactly the same as creating the test manually.

## Analytics

You have the flexibility to integrate your own analytics platform and compare the results against each variant being used. To access the information of the variants used in a specific PageView, you can utilize the `window.LIVE.flags` variable. This variable is an array that contains objects with two properties: `name` (the name of the Matcher) and `value` (the evaluated result of the Matcher, either `true` or `false`).

These flags are also available in the `X-Deco-Matchers` header, where each cookie has a value of `1` if the condition is evaluated as true, or `0` otherwise.

By leveraging this information, you can analyze and track the performance of each variant and make informed decisions based on the data obtained.

We are continuously working to enhance our analytics capabilities and streamline the process of accessing and analyzing test results. Our goal is to provide a seamless experience where you can create and manage tests, as well as view and interpret the corresponding analytics data, all in one centralized location. By consolidating these functionalities, we aim to make it easier for you to make data-driven decisions and optimize your website's performance.

Check our [GTM Analytics Documentation](/docs/en/composable-apis/gtm) for further information.
