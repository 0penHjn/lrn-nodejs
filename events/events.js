const EventEmitter = require('events');
const http = require('http');

const myEmitter = new EventEmitter;

const calcOrder = (count,cost) => count*cost;

let name = '';
let count = null;
let cost = null;

myEmitter.on("orderName",(n)=>{name = n});
myEmitter.on("orderCount",(cnt)=>{count = cnt});
myEmitter.on("orderCost",(cst)=>{cost = cst});
myEmitter.on("orderFullCost",(func)=>{console.log(`full_cost:${func(count,cost)}`);});

setTimeout(()=>{
    myEmitter.emit("orderName", "coffee");
    myEmitter.emit("orderCount", 3);
    myEmitter.emit("orderCost", 3);
    myEmitter.emit("orderFullCost", calcOrder);
    },3000);

const server = http.createServer();

server.on('request', (req, res)=>{
    console.log(req.url);
    res.end('Request received');
});

server.on('close',()=>{
    console.log('server closed');
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Server waiting requests");
});