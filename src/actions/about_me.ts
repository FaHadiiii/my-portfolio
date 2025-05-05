"use server";

import { db } from "@/db";
import { aboutMeTable } from "@/db/schema";
import { certificationsTable } from "@/db/schema";

export const fetchAboutMe = async () => {
  const aboutMeRes = await db.select().from(aboutMeTable);
  return aboutMeRes;
};

export const fetchCertifications = async () => {
  const certRes = await db.select().from(certificationsTable);
  return certRes;
};

