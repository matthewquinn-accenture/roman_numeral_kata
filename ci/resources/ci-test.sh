#!/bin/bash -e

echo "installing yarn"
yarn install

echo "running tests"
npm test
