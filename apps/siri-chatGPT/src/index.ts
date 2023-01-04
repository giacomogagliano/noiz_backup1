import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import * as openai from "openai";

const Configuration = openai.Configuration;
config();

const KEY = process.env.OPENAI_API_KEY;
const configuration = new Configuration({ apiKey: KEY });

const openai_ = new openai.OpenAIApi(configuration);
async function fetchOpenAI(prompt) {
  const data = await openai_.createCompletion({
    prompt: `${prompt}`,
    model: "text-davinci-002",
    max_tokens: 300,
    temperature: 0.7,
    n: 1,
  });
  return data;
}
fetchOpenAI;

const app = express();
app.use(bodyParser.json({ type: "application/json" }));

app.post("/ask-chatgpt", (request, response) => {
  if (request.url === "/ask-chatgpt") {
    response.statusCode = 200;
    fetchOpenAI(request.body.prompt).then(d => {
      const res = d.data.choices[0].text;
      console.log(res);

      response.end(res);
    });
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
  // qui puoi inserire il codice per elaborare il prompt e inviare una risposta all'utente
});

app.listen(8080, () => process.stdout.write("server listening on port 8080"));
