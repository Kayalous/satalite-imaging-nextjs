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


export function constructMainEC2Url(path, name) {

  const middle = "level0";

  const ext = "_processed.png";

  // console.log("path", path, "name", name);
  

  let processedPath = path.replace(name, `${middle}/${name}/${name}${ext}`);

  processedPath = '/' + processedPath;

  return processedPath;

  // return baseUrl + path + middle + path + name + ext;

  // return "/example.jpeg";
}
export function constructSubEC2Url(path, name, height = 0, width = 0) {

  const middle = "level0";

  const ext = ".png";

  // console.log("path", path, "name", name);
  

  let processedPath = path.replace(name, `${middle}/${name}/localized_processed/${name}_${height}_${width}${ext}`);

  processedPath = '/' + processedPath;

  return processedPath;

  // return baseUrl + path + middle + path + name + ext;

  // return "/example.jpeg";
}