require('dotenv').config();
import express from "express";
import path from "path";

//import { myCors } from "./middlewares/my-cors";
import cors from "cors";
//import { simpleLogger } from "./middlewares/simpleLogger";
import { logger, errorLogger } from "./middlewares/logger";

const app = express();

app.use(express.static(path.join(process.cwd(),"public")))
app.use(express.json())

// my middleware
//app.use(myCors);
//app.use(simpleLogger);
app.use(cors());
app.use(logger); // use this before the router

// routers
let userAPIRouter = require('./routes/userApi');
app.use("/api/users",userAPIRouter);

app.use(errorLogger) // use this after the router

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


