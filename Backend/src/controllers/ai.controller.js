const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Please provide a code");
  }

  const result = await aiService.generateContent(code);
  res.send(result);
};
