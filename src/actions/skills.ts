"use server";

import { db } from "@/db";
import { skillsTable } from "@/db/schema";

export const fetchSkills = async () => {
  const skillRes = await db.select().from(skillsTable);
  return skillRes;
};

export const dynamic = "force-dynamic";
