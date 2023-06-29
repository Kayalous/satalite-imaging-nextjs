import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getQSParamFromURL(
  key: string,
  url: string | undefined
): string | null {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

export function constructS3Url(path, name) {
  const baseUrl =
    "https://s3.us-east-1.amazonaws.com/rfims-ml-addson/stand_alone/";

  const middle = "/localized_processed/";

  const ext = ".png";

  // return baseUrl + path + middle + path + name + ext;

  return "/example.jpeg";
}
