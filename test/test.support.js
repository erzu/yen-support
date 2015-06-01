'use strict';

var $ = require('yen')

require('yen-support')


describe('yen/support', function() {
  it('detects support of perspective', function() {
    expect($.support.perspective).not.to.be(null)
  })
})
