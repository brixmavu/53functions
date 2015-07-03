var hello = require("./reverse.js");

test( 'reverse function', function(assert) {
  equal( "xirb", hello.reverse("brix"), "We expect a reserved value of 'xirb'" );
});