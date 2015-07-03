var hello = require("./upper.js");

test( 'upper function', function(assert) {
  equal( "WATER", hello.upper("water"), "We expect value to be WATER" );
});