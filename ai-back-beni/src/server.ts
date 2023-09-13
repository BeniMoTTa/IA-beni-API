import { fastify } from "fastify";

const app = fastify();

app.get("/", () => {
  return "Para quem está trabalhando, cadê a p**** do meu vinho ?";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
