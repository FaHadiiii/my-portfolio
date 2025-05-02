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
