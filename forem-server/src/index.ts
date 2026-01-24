import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants.js";

const main = async () => {
  const orm = await MikroORM.init({
    entities:[], //corresponds to db-tables.
    dbName: "forem",
    debug: !__prod__ //checks the raw SQL-query running under the hood via orm.
  });
  console.log("Hellos coom ts");
};

main();
