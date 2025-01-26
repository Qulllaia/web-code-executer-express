const fileWriter = require("../scripts/language-file-creater");
const fileExecuter = require("../scripts/code-executer");

class CodeExecuterController {
  async getCode(req, res) {
    const { userId, language, script } = req.body;
    let { stdout, stderr } = await fileWriter(userId, script, language).then(
      (executeData) => {
        return fileExecuter(...executeData);
      }
    );
    res.status(200).send({
      status: "Code done succesfully",
      output: await stdout.toArray(),
      error: [],
    });
  }
}

module.exports = new CodeExecuterController();
