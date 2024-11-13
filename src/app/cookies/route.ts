"use server";
import { setSignedCookies } from "./utls.ts";

export async function GET(request: Request) {
  const requestURL = request.url;
  console.log(`===== Request URL : ${requestURL}`)
  await setSignedCookies(requestURL);
  return new Response("Cookie set", {
    status: 200,
  });
}
