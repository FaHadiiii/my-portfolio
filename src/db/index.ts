import { drizzle } from "drizzle-orm/neon-http";

export const dynamic = "force-dynamic";
export const db = drizzle(process.env.DATABASE_URL!);
