import http from "http";

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/") {
        res.setHeader("Content-Type", "index.html");
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body><form method='POST' action='/create-user'><input type='text' name='message' placeholder='Enter your message...' /><button type='submit'>Submit</button></form></body>");
        res.write("</html>");
        return res.end();
    }

    if(url === "/users") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Users</title></head>");
        res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
        res.write("</html>");
        return res.end();
    }

    if (url === "/create-user") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split("=")[1]);
            //username="helloWorld" will be printed in the console we are splitting using the =
        
        });
        res.statusCode = 302;
        res.setHeader("location", "/");
        res.end();
    }
});

server.listen(20000);