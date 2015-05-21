var Promise = require('q').Promise;
var consolidate = require('consolidate');

var supports = [
 'liquid',
 'jade',
 'dust',
 'swig',
 'atpl',
 'liquor',
 'ejs',
 'eco',
 'jazz',
 'jqtpl',
 'haml',
 'hamlet',
 'whiskers',
 'haml-coffee',
 'hogan',
 'templayed',
 'handlebars',
 'underscore',
 'lodash',
 'qejs',
 'walrus',
 'mustache',
 'just',
 'ect',
 'mote',
 'toffee',
 'dot',
 'ractive',
 'nunjucks',
 'htmling',
 'react'
];

function renderWithPromise(render, template, locals, fn) {
  return new Promise(function (res, rej) {
    var callback = fn || function (err, html) {
      if (err) {
        return rej(err);
      }
      res(html);
    };

    render(template, locals, callback);
  });
}

for (var i = 0; i < supports.length; i++) {
  var name = supports[i];

  exports[name] = renderWithPromise.bind(this, consolidate[name]);

  exports[name].render = renderWithPromise.bind(this, consolidate[name].render);
}
