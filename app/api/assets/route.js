import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

import { getQSParamFromURL } from "../../../lib/utils";

const prisma = new PrismaClient();

import { S3Client, GetObjectCommand, S3 } from "@aws-sdk/client-s3";

export async function GET(req, res) {
  const path = getQSParamFromURL("path", req.url);

  const command = new GetObjectCommand({
    Bucket: "rfims-prototype",
    Key: path,
  });

  const client = new S3Client({
    region: "us-gov-west-1",
  });

  const response = await client.send(command);

  return new NextResponse(response.Body, {
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
}
