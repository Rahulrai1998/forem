import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants.js";
import { Post } from "./entities/post.entity.js";
import mikroOrmConfig from "./mikro-orm.config.js";
import path from "path";

const main = async () => {
  const orm = await MikroORM.init(); //connect to db
  await orm.migrator.up(); //run migration for schema changes
  //run SQL for db interactios and mutations
  const post = new Post();
  post.title = "New Post";
  orm.em.persist(post);
  await orm.em.flush();
};

main().catch((error) =>
  console.log(
    "\n\nERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR\n****\n",
    error,
    "\n*****",
  ),
);
