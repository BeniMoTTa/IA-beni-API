import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/getAllPrompts";

const app = fastify();

app.register(getAllPromptsRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
