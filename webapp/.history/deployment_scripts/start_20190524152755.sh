#!/usr/bin/env bash

sudo systemctl start webapp
cd /opt/webapp
node index.js
sudo useradd webapp