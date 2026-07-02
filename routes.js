import fs from 'fs';


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
if(url === "/") {
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form method="POST" action="/message"><input type="text" name="message" placeholder="Enter your message..." /><button type="submit">Submit</button></form></body>')
    res.write('</html>');
    return res.end();
    }
    //process.exit();
    if(url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
        //modify the data only the object itself thats why the body was working without issue.
      });
  return req.on('end', () => {
        const parsedBody =  Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        
      });
       
       fs.writeFile('message.txt', message, (err) => {
         res.statusCode = 302;
       res.setHeader('Location', '/');
       return res.end();
       });
    }
    res.setHeader("Content-Type", 'text/html');
    //allowing only the html files
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>')
    res.write('</html>');
  res.end();
};


export default requestHandler;