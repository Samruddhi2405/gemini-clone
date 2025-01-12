import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCSIVHPn7W1LDSkqbMhhp__YfpX7Sf3lgk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "What is react js";

const result = await model.generateContent(prompt);
console.log(result.response.text());

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
}

export default run();