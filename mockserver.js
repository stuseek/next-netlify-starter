const defaultConfig = require("dotenv-defaults");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const http = require("http");
const mockserver = require("mockserver");

defaultConfig.config();

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

http.createServer(mockserver("mocks", { verbose: true })).listen(80);
