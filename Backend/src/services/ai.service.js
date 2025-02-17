const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function initialize() {
    const prompt = "Explain how AI works";
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

// Call the initialize function to execute the top-level await logic
initialize();

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

// Export the function for use in other modules
module.exports = {
    generateContent,
};