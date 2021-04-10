const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const usersRouter = require("./routes/users");
const sessionsRouter = require("./routes/session");

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/auth", sessionsRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port ", process.env.PORT);
});
