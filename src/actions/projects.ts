"use server";

import { db } from "@/db";
import { projectsTable } from "@/db/schema";

export const fetchProjects = async () => {
  const projectRes = await db.select().from(projectsTable);
  return projectRes;
};

export const dynamic = "force-dynamic";

