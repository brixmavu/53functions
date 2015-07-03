var hello = require("./length.js");

test( 'length', function(assert) {
  equal( "4", hello.length("brix"), "We expect value to be 4"  );
});
