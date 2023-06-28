import { NextResponse } from "next/server";
import executeQuery from "../../../lib/db";

const handler = async (req, res) => {
  const respose = await executeQuery({
    query: "SELECT * FROM `stand_alone`.`ml_localization`",
  });

  return NextResponse.json({ name: respose });
};

export { handler as GET, handler as POST };
