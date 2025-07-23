import postgres from "postgres";
console.log("DB URL:", import.meta.env.VITE_DATABASE_URL);

// Fix: explicitly type the SQL client to accept any structure
const sql: postgres.Sql<any> = postgres(import.meta.env.VITE_DATABASE_URL!, {
  idle_timeout: 60,
});

export default sql;
