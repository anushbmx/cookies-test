"use server";
import { setSignedCookies } from "./utls.ts";

export async function GET(request: Request) {
  console.log(`===== Request URL : ${request.url}`)
  await setSignedCookies(request.url);
  return new Response("Cookie set", {
    status: 200,
  });
}
