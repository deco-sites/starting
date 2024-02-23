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

  const payload = {
    contents,
    api_key: apiKey || Deno.env.get("API_KEY"),
  };

  await fetch(
    url ||
      `https://script.google.com/macros/s/${Deno.env.get("SCRIPT_ID")}/exec`,
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    },
  );

  return;
};

export default action;
