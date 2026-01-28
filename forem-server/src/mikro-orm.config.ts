import { defineConfig } from "@mikro-orm/core";
import { __prod__ } from "./constants.js";
import { Post } from "./entities/post.entity.js";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import path from "path";
import { Migrator } from "@mikro-orm/migrations";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  extensions: [Migrator],
  migrations: {
    path: path.join(__dirname, "./migrations"), //for cross-platform path resolve.
    // pathTs: path.join(__dirname, "src/migrations"),
    glob: "!(*.d).{js,ts,cjs}",
    fileName: (timestamp, name) => `${timestamp}_${name || "migration"}`,
  },
  entities: [Post], //corresponds to db-tables.
  dbName: "forem",
  driver: PostgreSqlDriver,
  user: "postgres",
  password: "Exasperate@98",
  host: "localhost",
  debug: !__prod__, //checks the raw SQL-query running under the hood via orm.
});
