#!/bin/bash

blc -r http://localhost:9000/\
    --exclude https://www.linkedin.com/in/daniel-caldas/\
    --exclude http://localhost:9000/aboutme\
    --exclude http://localhost:9000/rss.xml\
    --exclude https://www.amazon.com/*\
    --exclude https://marketplace.visualstudio.com/items?itemName=jingkaizhao.vscode-redux-devtools\
    --exclude https://github.com/philipwalton\
    --exclude https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome\
    --exclude https://addons.mozilla.org/en-US/firefox/addon/tweak-extension/\

