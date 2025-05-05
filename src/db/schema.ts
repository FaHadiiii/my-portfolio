import { jsonb, pgTable, varchar } from "drizzle-orm/pg-core";

export const homeTable = pgTable("home", {
  rotatingTextRight: jsonb("rotatingTextRight").notNull(),
  rotatingTextLeft: jsonb("rotatingTextLeft").notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const aboutMeTable = pgTable("about_me", {
  description: varchar({ length: 255 }).notNull(),
  pic_url: varchar({ length: 255 }),
});

export const certificationsTable = pgTable("certifications", {
  cert_name: varchar({ length: 255 }),
  issuer: varchar({ length: 255 }),
  year: varchar({ length: 255 }),
});

export const skillsTable = pgTable("skills", {
  skill_name: varchar({ length: 255 }),
  skill_description: varchar({ length: 255 }),
  stack_pic: jsonb("stack_pic"),
});

export const projectsTable = pgTable("projects", {
  project_name: varchar({ length: 255 }),
  project_short_desc: varchar({ length: 255 }),
  tech_stack: jsonb("tech_stack"),
  project_desc: varchar({ length: 255 }),
  project_links: jsonb("project_links"),
  project_type: varchar({ length: 255 }),
  project_pic: varchar({ length: 255 }),
});
