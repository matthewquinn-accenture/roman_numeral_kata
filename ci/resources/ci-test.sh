#!/bin/bash -e

echo "install sudo"
apt-get install sudo

echo "installing yarn items"
sudo apt-get update && sudo apt-get install yarn

echo "instaling node"
sudo apt-get install npm

echo "installing yarn"
yarn install

echo "running tests"
npm test
