const fileWriter = require("../scripts/language-file-creater");
const fileExecuter = require("../scripts/code-executer");

class CodeExecuterController {
  async getCode(req, res) {
    const { language, script } = req.body;
    const result = await fileWriter(script, language).then((executeData) => {
      return fileExecuter(...executeData);
    });
    res.status(200).send({
      status: "Code done succesfully",
      output: result,
    });
  }
}

module.exports = new CodeExecuterController();
