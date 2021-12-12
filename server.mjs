// const express = require('express');
// const https = require('https');
// const fs = require( 'fs');
// const  commandLineArgs = require( 'command-line-args');

// const api = require('./api-modules/api.cjs');
import homePage from './index.mjs';
import express from 'express';
import https from 'https';
import fs from 'fs';
import commandLineArgs from 'command-line-args';

import api from './api-modules/api.mjs';

const __dirname = process.argv[1].replace('server.mjs', '');

let app = express();
app.use(express.static(__dirname));

/**
 * @type CommandOptions
 * @param {port} number port
 *
 */
const commandOptions = [{ name: 'port', alias: 'p', defaultValue: '15776' }];

/**
 * @type CommandOptions
 */
const options = commandLineArgs(commandOptions);

let server;
const initialized =  api.init(app);
let displayRoutes ='';

initialized.routesList.forEach((r) => {
    displayRoutes += `<div>${r}</div>`;
});


app.get('/afterschool/api/v1/default', (req, res) => {
  res.send({ success: 'default works' });
});

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
    
      </head>
      
      <body>
        <div>
          <h1>After School Server</h1>
          <div>
              Api Routes List
              <div id="api-routes-list">${displayRoutes}</div>
          </div>
        </div>
      </body>
    </html>`) ;
});



server = https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/key.pem'),
      cert: fs.readFileSync(__dirname + '/cert.pem'),
    },
    initialized.app
  )
  .listen(options.port || 52121, function () {
    const host = server.address().address;
    console.log(
      'api running on https://%s:%s',
      'localhost',
      server.address().port
    );
  });

export default { app, server };
