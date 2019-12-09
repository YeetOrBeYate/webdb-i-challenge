const express = require('express');
const AccountRouter = require("./Routers/Accounts")

const server = express();

server.use(express.json());
server.use("/accounts", AccountRouter)

module.exports = server;