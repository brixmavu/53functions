var hello = require("./hello_uppercase.js");

test( 'hello_uppercase', function(assert) {
  equal( "Hello, BRIX!", hello.hello_uppercase("brix"), "We expect value to be Hello, BRIX!"  );
});
