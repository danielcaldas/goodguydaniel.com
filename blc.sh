#!/bin/bash

blc -r http://localhost:9000/\
  --exclude https://twitter.com*\
  --exclude https://codepen.io/*\
  --exclude https://www.linkedin.com/in/daniel-caldas/\
  --exclude https://www.rxjs-fruits.com/subscribe\
  --exclude http://localhost:9000/aboutme\
  --exclude http://localhost:9000/rss.xml\
  --exclude https://marketplace.visualstudio.com/items?itemName=jingkaizhao.vscode-redux-devtools\
  --exclude https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome\
  --exclude https://addons.mozilla.org/en-US/firefox/addon/tweak-extension/
