const { exec } = require("child_process");

const _executeSyntax = {
  python: "python",
  golang: "go run",
};

const executeCodeFile = async (language, path) => {
  const result = await exec(
    _executeSyntax[language] + " " + path,
    (ReqError, output, error) => {
      if (ReqError) {
        return ReqError;
      }
    }
  );
  return result;
};

module.exports = executeCodeFile;
