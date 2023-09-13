import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/getAllPrompts";
import { uploadVideoRoute } from "./routes/uploadVideos";
import { transcriptionCreateRoute } from "./routes/transcriptionCreate";

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(transcriptionCreateRoute);
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
