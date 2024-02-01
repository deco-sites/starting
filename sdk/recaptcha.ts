
export const RECAPTCHA_SITE_KEY = "6LcEk2IpAAAAAK7Eq0EZYbB4mqRE1uHUXWmuzXqR";
export const RECAPTCHA_SECRET = Deno.env.get("RECAPTCHA_SECRET");

/**
 * Verifies the reCAPTCHA token with the Google reCAPTCHA API.
 * @param token - The reCAPTCHA token to be verified.
 * @returns A promise that resolves to a boolean indicating whether the token is valid.
 */
export function verifyCaptcha(token: string): Promise<boolean> {
  return fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.success;
    });
}
