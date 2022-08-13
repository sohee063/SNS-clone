import express from "express";
import cors from "cors";
import messagesRoute from "./routes/messages.js";
import usersRoute from "./routes/users.js";
import { ApolloServer } from "apollo-server-express";

const app = express();

/* REST API 영역 -------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = [...messagesRoute, ...usersRoute];
routes.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});
REST API 영역 ------------------------------------------- */

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: {
      messages: "",
      users: ""
    }
  }
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(8000, () => {
  console.log("server listening on 8000...");
});
