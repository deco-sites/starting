---
description: Learn how to create content variations based on specific conditions
since: 2.0
---

**Variants** allow you to target content based on certain _conditions_, enabling you to customize and adapt pages for different user _segments_. For example, you can create a variant to change the layout of the entire page every **Friday** for **50% of users**. By using variants, you can dynamically modify content targeted at specific segments of your audience.

Variants are powered by **Matchers** (or **Segments**), which are _blocks_ used to evaluate specific _conditions_ based on _user characteristics_, _date and time_, _random selection_ (A/B testing), _user browsing history_, _user device_, or _any external information extracted from the request_. Matchers are configured to determine whether a user belongs to a particular segment or not. Segments refer to a subset of users on your site that satisfy the conditions defined by the matchers. A user can belong to multiple segments simultaneously. For example, a user can be part of the `São Paulo` segment, which targets users located in `São Paulo`, and also be part of an experiment that includes 50% of users. Segments can be combined to create more specific targeting criteria.

The segments screen allows you to list the saved **Matchers**/**Segments**, where they are used, and create new segments.

<img width="640" alt="Segments Library" src="/docs/cms-capabilities/segments/segments1.png">

Matchers can be used _inline_ or saved with a **specific name**. The main difference between the two approaches is that a saved matcher will be evaluated only once, and its result will remain consistent throughout the request cycle. This means that once a matcher is evaluated as `true` or `false` for a particular user's page view, that value will be maintained throughout the request.

This behavior allows you to reuse the **same matcher result in multiple variants within the same page or in different places on your site**. This ensures consistent behavior and avoids redundant evaluations of the same condition.

Additionally, some matchers have a `sticky` behavior, which means that the matcher result can be stored in the user's session and remain consistent until the end of the session. This is especially useful for A/B testing, where users are assigned to a specific variant and should have a consistent experience during the session.

By leveraging Matchers and their capabilities, you can create dynamic and personalized experiences for your users while optimizing performance, reducing redundant evaluations, and maintaining consistency across variants.

## A/B Testing

You can manually create **A/B tests** by selecting the `Random Matcher` condition and configuring the percentage of traffic to be split. Alternatively, if you are not using a `Random Matcher` condition, our "Publish" button will automatically prompt the creation of a new test. The result is exactly the same as creating the test manually.

## Creating Segments

To create a segment to be used across different sites, simply enter the "Create New Segment" operation.

<img width="320" alt="Creating a New Segment" src="/docs/cms-capabilities/segments/segments2.png">

You can:

- **Create template**: Create a segment that will be available in the segments library. This means creating a codebase that defines a set of properties and a program to return data.
- **Using a template**: Create a saved segment based on an existing base. The name will be the identification of this element.

The default implementation offers a rich set of possible selections for use, but you can create any segment that is based on the request, site context, or user-defined properties.

<img width="480" alt="Selecting a base" src="/docs/cms-capabilities/segments/segments3.png">
