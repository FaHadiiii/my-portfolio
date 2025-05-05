"use server";

import { db } from "@/db";
import { homeTable } from "@/db/schema";

export const fetchHome = async () => {
  const homeRes = await db.select().from(homeTable);
  return homeRes;
};

