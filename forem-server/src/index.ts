import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants.js";
import { Post } from "./entities/post.entity.js";
import mikroOrmConfig from "./mikro-orm.config.js";
import path from "path";
import express from "express";
import type { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { HelloResolver } from "./resolvers/hello.js";
import { buildSchema } from "type-graphql";

const main = async () => {
  const orm = await MikroORM.init(); //connect to db
  await orm.migrator.up(); //run migration for schema changes

  //run SQL for db interactios and mutations
  // const post = new Post();
  // post.title = "New Post";
  // orm.em.persist(post);
  // await orm.em.flush();

  //express server-setup for REST apis.
  const app: Application = express();
  // app.get("/", (_, res) => {
  //   res.send("Hello");
  // });

  // apollo server instance
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    introspection: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app as any });

  app.listen(4000, () => {
    console.log("server running on 4000");
    console.log(
      `Apollo GraphQL Sandbox available at http://localhost:4000${apolloServer.graphqlPath}`,
    );
  });
};

main().catch((error) =>
  console.log(
    "\n\nERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR\n****\n",
    error,
    "\n*****",
  ),
);
