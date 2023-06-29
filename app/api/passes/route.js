import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { getQSParamFromURL } from "../../../lib/utils";

const prisma = new PrismaClient();

const pageSize = 20;

export async function GET(req, res) {
  let skip = getQSParamFromURL("page", req.url)
    ? getQSParamFromURL("page", req.url) * pageSize
    : 0;

  let sat_name = getQSParamFromURL("sat_name", req.url);

  const today = new Date();

  let startTime =
    new Date(getQSParamFromURL("startTime", req.url)) ??
    new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000);
  let endTime =
    new Date(getQSParamFromURL("endTime", req.url)) ??
    new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000);

  let passes = await prisma.ml_localization.groupBy({
    by: ["image_name", "error_start_time", "error_end_time"],
    where: {
      sat_name: {
        equals: sat_name,
      },
      // error_start_time after 2021-01-01
      // error_end_time before 2021-01-01
      error_start_time: {
        gte: startTime,
      },
      error_end_time: {
        lte: endTime,
      },
    },
  });

  // imageNames = imageNames.map((obj) => obj.image_name);

  // const trans = await prisma.$transaction([
  //   prisma.ml_localization.count({
  //     where: {
  //       image_name: {
  //         in: imageNames,
  //       },
  //     },
  //   }),

  //   prisma.ml_localization.findMany({
  //     skip: skip,
  //     take: pageSize,
  //     where: {
  //       image_name: {
  //         in: imageNames,
  //       },
  //     },
  //   }),
  // ]);

  // const data = {
  //   count: trans[0],
  //   data: trans[1],
  // };

  return NextResponse.json({
    passes,
  });
}

// export { handler as GET, handler as POST };
