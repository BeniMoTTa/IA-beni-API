import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/getAllPrompts";
import { uploadVideoRoute } from "./routes/uploadVideos";
import { transcriptionCreateRoute } from "./routes/transcriptionCreate";
import { generateAICompletionRoute } from "./routes/generateAI";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(transcriptionCreateRoute);
app.register(generateAICompletionRoute);
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
