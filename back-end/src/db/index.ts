import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
    port: 5432,
    host: "localhost",
    database: "postDB",
    user: "postgres",
    password: "Aryan123456"
});



export const db:NodePgDatabase<typeof schema> = drizzle(pool, {schema})