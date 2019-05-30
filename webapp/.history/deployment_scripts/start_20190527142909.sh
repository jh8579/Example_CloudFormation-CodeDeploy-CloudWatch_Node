#!/usr/bin/env bash

sudo pm2 stop node-app
# actually start the server
sudo pm2 start /opt/webapp/index.js -i 0 --name "node-app"
