import axios from "axios";
import { config } from "dotenv";

config();

const apiKey = process.env.METIS_API_KEY; // Your API key from .env
const url = "https://api.metisai.ir/api/v1/wrapper/openai_chat_completion/chat/completions";

const data = {
  model: "gpt-4o-mini",
  messages: [
    // messages history between user and bot
    // what you gonna act to be
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
    // user message
    {
      role: "user",
      content: "Who won the world series in 2020?",
    },
    {
      role: "assistant",
      content: "The Los Angeles Dodgers won the World Series in 2020.",
    },
    {
      role: "user",
      content: "Where was it played?",
    },
  ],
};

axios
  .post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  })
  .then((response) => {
    console.log("Response from API:", response.data.choices[0].message.content);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
