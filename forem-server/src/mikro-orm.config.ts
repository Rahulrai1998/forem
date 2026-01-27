import { defineConfig } from "@mikro-orm/core";
import { __prod__ } from "./constants.js";
import { Post } from "./entities/post.entity.js";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export default defineConfig({
    entities:[Post], //corresponds to db-tables.
    dbName: "forem",
    driver:PostgreSqlDriver,
    password:"Exasperate@98",
    debug: !__prod__ //checks the raw SQL-query running under the hood via orm.
  })