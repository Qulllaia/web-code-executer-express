const fileSystem = require("fs");

const _avaibleLanguages = {
  golang: "go",
  python: "py",
};

async function writeFile(userId, data, language) {
  const pathToCreateDirectory = `./file-storage/${userId}/${language}`;
  const path = pathToCreateDirectory + `/hello.${_avaibleLanguages[language]}`;
  try {
    await makeDirectory(pathToCreateDirectory);

    await fileSystem.access(pathToCreateDirectory, (error) => {
      fileSystem.writeFile(path, data, () => console.log("done"));
    });
  } catch (e) {
    console.log(e);
  }

  return [language, path];
}

const makeDirectory = async (path) =>
  await fileSystem.access(path, (error) => {
    if (error) {
      fileSystem.mkdirSync(path, { recursive: true }, (error) => {
        if (error) console.log(error);
      });
    } else console.log(error);
  });

module.exports = writeFile;
