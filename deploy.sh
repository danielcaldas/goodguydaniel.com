#!/bin/bash

echo -n "U sure you're good to deploy (YES!/n)? "
read answer

if [ "$answer" == "YES!" ] ;then
    npm run clean && gatsby build && gh-pages -d public -b master
else
    echo "Alright, bye bye."
fi
