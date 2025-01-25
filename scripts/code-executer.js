const { exec } = require("child_process");

const executeSyntax = {
  python: "python",
  golang: "go run",
};

const executeCodeFile = async (language, path) => {
  let result = await exec(
    executeSyntax[language] + " " + path,
    (ReqError, output, error) => {
      if (ReqError) {
        console.log(ReqError);
        return;
      }
    }
  );
  return result.stdout.toArray();
};

module.exports = executeCodeFile;
