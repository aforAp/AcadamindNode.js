import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
const app = express();
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.get("/hello", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "practiceFolder","user.html"));
});

app.get("/users", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "practiceFolder","users.html"));
});

app.listen(3010, () => {
    console.log("Server is running on port 3010");
});
