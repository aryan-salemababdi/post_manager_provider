import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg";


async function main() {
    try {
        const pool = new Pool({ connectionString: process.env.POSTGRES_URL});
        const db: NodePgDatabase = drizzle(pool)
        console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        console.log(pool);
        
        
        await migrate(db, { migrationsFolder: "src/db/drizzle" })

        await pool.end()
    }
    catch (e) {
        console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr2");
        console.log(e)
    }
}

main()