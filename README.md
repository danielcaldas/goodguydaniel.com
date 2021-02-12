# goodguydaniel.com

<a href="https://goodguydaniel.com" title="Blog and Home of Daniel Caldas" target="_blank">Blog and Home of Daniel Caldas</a>

## Run book

### Development

```
npm run dev
```

### Utils

#### Auto-generate links in browser

```js
copy(`<a href="${window.location.href}" target="_blank" title="${document.title}">${document.title}</a>`);
```
