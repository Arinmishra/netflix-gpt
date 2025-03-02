import OpenAI from "openai";

const client = new OpenAI({
  // apiKey: OPENAI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default client;
