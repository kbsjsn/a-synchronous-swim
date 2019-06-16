const fs = require("fs");
const path = require("path");
const headers = require("./cors");
const multipart = require("./multipartUtils");
const queue = require("../js/messageQueue");
const keypressHandler = require("./keypressHandler");

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join(".", "background.jpg");
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = queue => {
  messageQueue = queue;
};
console.log(module.exports.backgroundImageFile)
module.exports.router = (req, res, next = () => {}) => {
  console.log("Serving request type " + req.method + " for url " + req.url);
  if (req.method === "GET") {
    if (req.url === '/background.jpg') {
    console.log('Opening file')
    fs.open(module.exports.backgroundImageFile, 'r', function(err, fd) {
      if(err) {
        res.writeHead(404);
        //console.error(err)
      } else { 
        console.log('found');
        res.writeHead(200, {'content-type':'image/jpeg'});
        res.end(img,'binary');
      }
    })
  } else {
    res.writeHead(200, headers);
    res.end(queue.dequeue())
  }
}
  
  
  
  
  //  && req.url === '/') {
  //   // keypressHandler.initialize(data => console.log("RESPONSE: ", data));
  //   // let swimCommands = ['up', 'down', 'left', 'right'];
  //   // let randomSwimIndex = Math.floor(Math.random() * swimCommands.length);
  //   // res.end(queue.dequeue());
  //   res.writeHead(200, headers);
  //   res.end(queue.dequeue())
    
  } else
  
  if (req.method === "POST") {
  
      req.on("error", () => {
        console.error("error");
      })
      .on("data", chunk => {
        queue.enqueue(chunk);
      })
      .on("end", () => {
        req.end;
      });

    next(); // invoke next() at the end of a request to help with testing!
  }
};
