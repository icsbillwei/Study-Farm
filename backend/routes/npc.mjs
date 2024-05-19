import OpenAI from "openai";
import express from "express";

var router = express.Router();

const OPENAI_API_KEY = process.env.OPENAI_API;
const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

// chat with npc
router.post("/", async function (req, res, next) {
  const body = req.body;
  const prompt = body.prompt;
  const character = body.character;
  const personality = body.personality;

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `Your name is ${character}. This is their personality: ${personality}`,
      },
      { role: "user", content: prompt},
    ],
  });

  console.log("SYSTEM: ", `Your name is ${character}. This is their personality: ${personality}`)

  console.log('USER: ', prompt);
  res.send(response.choices[0]);
});

export default router;
