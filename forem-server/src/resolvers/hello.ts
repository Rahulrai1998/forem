import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "hello world";
  }
}

/*
decorators are functions associated with classes, methods, properties which are called at runtime.
*/
