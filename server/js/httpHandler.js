const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const queue = require('../js/messageQueue');
const keypressHandler = require('./keypressHandler');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {

  messageQueue = queue;

};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if(req.method === 'GET') {
    // keypressHandler.initialize(data => console.log("RESPONSE: ", data));
    // let swimCommands = ['up', 'down', 'left', 'right'];
    // let randomSwimIndex = Math.floor(Math.random() * swimCommands.length);
    
    res.writeHead(200, headers);
    // res.end();
    // console.log(res.end())
    res.end(queue.dequeue());
  }

  if(req.method === 'POST') {

  }

  
  next(); // invoke next() at the end of a request to help with testing!
};
