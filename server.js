const express = require("express");
const cors = require("cors");
const codeExecuter = require("./routers/code-executer.router");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/api", codeExecuter);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
