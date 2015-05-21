var assert = require('assert');
var consolidateP = require('./');

describe('basics', function () {
  it('should return a promise', function (done) {
    consolidateP.handlebars.render('foo', {})
      .then(function (html) {
        assert.equal(html, 'foo');
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });
});
