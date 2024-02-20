#!/bin/bash

npm run build
cp -r ./out/* .
git add .
git commit -m pages
git push origin pages
