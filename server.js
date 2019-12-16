const express = require('express');
const AccountRouter = require("./Routers/Accounts")
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());
server.use("/accounts", AccountRouter)

module.exports = server;