---
description: TODO
since: 1.0.0
---

In some situations, when using [loaders](http://localhost:8000/docs/en/concepts/loader) to fetch data, an excessive amount of information may be received, negatively impacting page performance. This is evidenced by the significant size of the JSON transmitted to the client.

To mitigate this issue, we propose implementing a client-side data preprocessing process, ensuring that only necessary information is transmitted and used in the markup/UI.

## Data Flow

1. Data Request: Initiate the normal data flow by requesting the necessary information through props.

2. Data Loader: Use a loader to fetch the desired data. In some scenarios, the loader may return a substantial amount of data, for instance, when fetching related products from [VTEX](https://www.deco.cx/docs/en/composable-apis/vtex). However, it's essential to note that there are instances where the loader might return more data than necessary for the specific operation.

3. Inline Preprocessing: Introduce an inline data preprocessing mechanism. This component will receive the same props as the loader and process the data to transmit only essential information, optimizing performance.

4. Delivery to Component: Transmit only the processed data to the JSX component, thus reducing unnecessary load on the client.

## Benefits
- Significant reduction in the size of transmitted JSON.
- Noticeable improvement in page performance, especially in terms of loading.

By implementing this data preprocessing process, it is possible to optimize page performance, ensuring that only crucial information is sent and processed, providing a more streamlined performance for the user.