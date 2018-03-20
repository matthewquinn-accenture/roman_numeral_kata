#!/bin/bash -e

echo "updating and adding sudo"
apt-get update && apt-get install -y sudo

echo "installing yarn items"
sudo apt-get update && sudo apt-get install yarn

echo "instaling node"
sudo apt-get install npm

echo "installing yarn"
yarn install

echo "running tests"
npm test
