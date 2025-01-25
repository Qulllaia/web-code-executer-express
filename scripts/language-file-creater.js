const fileSystem = require("fs");

const _avaibleLanguages = {
  golang: "go",
  python: "py",
};

async function writeFile(data, language) {
  const path = `./scripts/${language}/hello.${_avaibleLanguages[language]}`;
  fileSystem.writeFile(path, data, (error) => {
    if (error) console.log(error);
    return;
  });
  console.log("Файл был успешно создан");
  return [language, path];
}

module.exports = writeFile;
