const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //solution 1
    /*fs.readFile(
        '1.html', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            res.end(data);
        });*/
    //solution 2
    /*const readable = fs.createReadStream("111.html");
    readable.on("data", chunk =>{
        res.write(chunk);
    });

    readable.on("end", () => {
        res.end();
    });
    readable.on("error", err => {
        console.log(err);
        res.statusCode =500;
        res.end("file not found!");
    });*/
    //solution 3
    const readable = fs.createReadStream("1.html");
    readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening..');
});

