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
};

const action = async ({crawlerUserId, crawlerApiKey, crawlerId} : Props): Promise<void> => {
  // const crawlerUserId = "2a9862c7-25b6-4e72-a194-7152d768959c";
  // const crawlerApiKey = "dfecac9615010e34398c83b859e629f1";
  // const crawlerId = "8c6a627b-685a-45e6-8674-401b2d960f23";

  const url =
    `https://crawler.algolia.com/api/1/crawlers/${crawlerId}/reindex`;
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
