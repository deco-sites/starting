const action = async (): Promise<void> => {
  const CRAWLER_USER_ID = "2a9862c7-25b6-4e72-a194-7152d768959c";
  const CRAWLER_API_KEY = "dfecac9615010e34398c83b859e629f1";
  const CRAWLER_ID = "8c6a627b-685a-45e6-8674-401b2d960f23";

  const url =
    `https://crawler.algolia.com/api/1/crawlers/${CRAWLER_ID}/reindex`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic " + btoa(`${CRAWLER_USER_ID}:${CRAWLER_API_KEY}`),
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
