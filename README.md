# consolidate-p
A Promise wrapper for Consolidate.js

```javascript
var consolidateP = require('consolidate-p');

consolidateP.handlebars.render('foo {bar}', {bar: 'baz'})
  .then(function (html) {
    console.log(html);
  })
  .catch(function (err) {
    console.log(err);
  });
```
