import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

import { getQSParamFromURL } from "../../../lib/utils";

import moment from "moment";
const prisma = new PrismaClient();

const pageSize = 100;

export async function GET(req, res) {
  // let skip = getQSParamFromURL("page", req.url)
  //   ? getQSParamFromURL("page", req.url) * pageSize
  //   : 0;

  let locations = getQSParamFromURL("locations", req.url).split(",");

  let response = {};

  let locationPromises = locations.map(async (location) => {
    let locationData = await prisma.ml_localization.groupBy({
      by: ["sat_name"],
      where: {
        s3_path: {
          contains: location,
        },
      },
      _count: {
        _all: true,
      },
    });

    let lastLocationDate = null;

    let satNames = locationData.map((item) => item.sat_name);

    let satDataPromises = satNames.map((sat_name) => {
      return prisma.ml_localization.findMany({
        where: {
          sat_name: sat_name,
        },
        orderBy: {
          Pass_Date: "desc",
        },
        take: 1,
      });
    });

    let lastEntries = await Promise.all(satDataPromises);

    let satalites = lastEntries.map((e) => {
      const locationDataItem = locationData.find(
        (item) => item.sat_name === e[0].sat_name
      );
      const numOfPasses = locationDataItem ? locationDataItem._count._all : 0;

      if (
        !lastLocationDate ||
        moment(e[0].Pass_Date, "YYYY-MM-DD-HH:mm:ss").isAfter(lastLocationDate)
      ) {
        lastLocationDate = e[0].Pass_Date;
      }

      return {
        id: e[0].sat_name,
        title: e[0].sat_name,
        description: e[0].Pass_Date
          ? "Last pass was " +
            moment(e[0].Pass_Date, "YYYY-MM-DD-HH:mm:ss").fromNow()
          : "No passes yet.",
        additional: numOfPasses + " Passes",
        numOfPasses: numOfPasses,
      };
    });

    response[location] = {
      id: location,
      title: location,
      description: lastLocationDate
        ? "Last pass was " +
          moment(lastLocationDate, "YYYY-MM-DD-HH:mm:ss").fromNow()
        : "No passes yet.",
      additional: locationData.length + " Satellites",
      satalites,
    };
  });

  await Promise.all(locationPromises);

  return NextResponse.json({
    response,
    // passes,
  });
}
