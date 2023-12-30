import {ApolloServer} from "npm:@apollo/server@4.9.5"
import { startStandaloneServer } from "npm:@apollo/server@4.9.5/standalone"
import mongoose from "npm:mongoose@8.0.3";
import { typeDefs } from "./gql/typeDefs.ts";
import { Query } from "./Resolvers/Query.ts";
import { Mutation } from "./Resolvers/Mutation.ts";
import { usuario } from "./Resolvers/Usuario.ts";
import { coleccion_de_comics } from "./Resolvers/coleccion_de_comics.ts";

const MONGO_URL= Deno.env.get("MONGO_URL")

if (!MONGO_URL) {
  throw new Error("Da url de Mongo");
}

try {
  

  await mongoose.connect(MONGO_URL);

  console.info("conectado a mongo")

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      usuario,
      coleccion_de_comics
    }
  })
  
  const {url} = await startStandaloneServer(server, {
    listen: {
      port: 3000,
    },
  })

} catch (error) {
  console.log(error);
}
