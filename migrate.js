import { connection } from 'next/server.js';
import { db } from './src/db/db.js';
import { migrate } from 'drizzle-orm/postgres-js/migrator'

//IEV Imediatiyl Envoke function
// This is used to run the migration script immediately when this file is executed.
(
    async ()=>{
   await migrate(db, {
        migrationFolder: './drizzle'
    })
    await connection.end()
}
)()