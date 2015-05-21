# consolidate-p

[![Build Status](https://travis-ci.org/alexsomeoddpilot/consolidate-p.svg?branch=master)](https://travis-ci.org/alexsomeoddpilot/consolidate-p)

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
