import http from "http";
import fs from "fs";
import routes from "./routes.js";

const server = http.createServer(routes);


server.listen(3000);