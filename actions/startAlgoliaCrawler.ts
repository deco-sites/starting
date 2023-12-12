export interface Props {
  /**
   * @title Crawler User ID
   */
  crawlerUserId: string;
  /**
   * @title Crawler API Key
   */
  crawlerApiKey: string;
  /**
   * @title Crawler ID
   */
  crawlerId: string;
}

const action = async (
  { crawlerUserId, crawlerApiKey, crawlerId }: Props,
): Promise<void> => {
  const url = `https://crawler.algolia.com/api/1/crawlers/${crawlerId}/reindex`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic " + btoa(`${crawlerUserId}:${crawlerApiKey}`),
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
