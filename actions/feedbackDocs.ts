export interface Props {
  contents: Array<string | boolean>;
  url?: string;
  apiKey?: string;
}

const action = async (
  props: Props,
  _req?: Request,
): Promise<void> => {
  const { contents, url, apiKey } = props;
 console.log("Sending feedback")
  const payload = {
    contents,
    api_key: apiKey || Deno.env.get("GOOGLE_API_KEY"),
  };
  console.log(payload);

  const response = await fetch(
    url ||
      `https://script.google.com/macros/s/${Deno.env.get("GOOGLE_SCRIPT_ID")}/exec`,
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
  console.log(`https://script.google.com/macros/s/${Deno.env.get("GOOGLE_SCRIPT_ID")}/exec`)
  console.log(await response.text())
  
 console.log("Feedback sent")
  return;
};

export default action;
