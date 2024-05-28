#!/bin/sh
set -x

echo "Wait for db to start"
sleep 10

echo "Run migrations"
node ace migration:run

echo "Start backend"
cd build
HOST=0.0.0.0 npm run start
