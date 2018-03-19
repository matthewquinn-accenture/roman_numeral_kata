#!/bin/bash -e

echo "installing yarn items"
apt-get update && sudo apt-get install yarn

echo "instaling node"
apt-get install npm

echo "installing yarn"
yarn install

echo "running tests"
npm test
