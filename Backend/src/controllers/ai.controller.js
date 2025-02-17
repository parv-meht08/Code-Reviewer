const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).send("Please provide a prompt");
  }

  const result = await aiService.generateContent(prompt);
  res.send(result);
};
