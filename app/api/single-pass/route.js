import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { getQSParamFromURL } from "../../../lib/utils";

const prisma = new PrismaClient();

const pageSize = 10;

export async function GET(req, res) {
  let skip = getQSParamFromURL("page", req.url)
    ? getQSParamFromURL("page", req.url) * pageSize
    : 0;

  let imageNames = [getQSParamFromURL("image_name", req.url)];

  const trans = await prisma.$transaction([
    prisma.ml_localization.count({
      where: {
        image_name: {
          in: imageNames,
        },
      },
    }),

    prisma.ml_localization.findMany({
      skip: skip,
      take: pageSize,
      where: {
        image_name: {
          in: imageNames,
        },
      },
    }),
  ]);

  const data = {
    count: trans[0],
    data: trans[1],
  };

  return NextResponse.json({
    data,
  });
}
