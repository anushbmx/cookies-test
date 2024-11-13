"use server";
import { cookies } from "next/headers";

export async function setSignedCookies(url: string) {

  const expireTime = new Date();
  expireTime.setHours(expireTime.getHours() + 2);

  const parsedUrl = new URL(url);
  const domain = parsedUrl.hostname;

  const cookie = {
    "CloudFront-Signature": `CloudFront-Signature====>Value==>${domain}`,
    "CloudFront-Key-Pair-Id" : `CloudFront-Key-Pair-Id===>Value==>${domain}`,
    "CloudFront-Policy" : `CloudFront-Policy===>Value==>${domain}`
  }

  console.log("===================================  Cookies set");
  console.log(`Domain ${domain}`);
  console.log("============================");
  cookies().set({
    domain: domain,
    expires: expireTime,
    httpOnly: true,
    name: "CloudFront-Signature",
    path: "/",
    secure: true,
    value: cookie["CloudFront-Signature"],
  });
  cookies().set({
    domain: domain,
    expires: expireTime,
    httpOnly: true,
    name: "CloudFront-Key-Pair-Id",
    path: "/",
    secure: true,
    value: cookie["CloudFront-Key-Pair-Id"],
  });
  if (cookie["CloudFront-Policy"]) {
    cookies().set({
      domain: domain,
      expires: expireTime,
      httpOnly: true,
      name: "CloudFront-Policy",
      path: "/",
      secure: true,
      value: cookie["CloudFront-Policy"],
    });
  }
}
