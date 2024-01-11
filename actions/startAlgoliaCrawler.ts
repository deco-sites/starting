import { Secret } from "apps/website/loaders/secret.ts";
export interface Props {
  /**
   * @title Crawler User ID
   */
  crawlerUserId: Secret;
  /**
   * @title Crawler API Key
   */
  crawlerApiKey: Secret;
  /**
   * @title Crawler ID
   */
  crawlerId: Secret;
}

const action = async (
  { crawlerUserId, crawlerApiKey, crawlerId }: Props,
): Promise<void> => {
  const url =
    `https://crawler.algolia.com/api/1/crawlers/${crawlerId.get()}/reindex`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic " +
      btoa(`${crawlerUserId.get()}:${crawlerApiKey.get()}`),
  };

  await fetch(url, {
    method: "POST",
    headers: headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default action;
