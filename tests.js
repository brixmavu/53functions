QUnit.test( 'hello World!', function( assert ) {
  assert.ok( helloWorld(), "hello world!" );
});

QUnit.test( 'hello_uppercase', function( assert ) {
  assert.ok( hello_uppercase("brix"), "Hello, BRIX!" );
});

QUnit.test( 'hello_joe', function( assert ) {
  assert.ok( hello_joe("Joe"), "Hello!" );
  assert.ok( hello_joe("Bob"), "Hello!" );
  assert.ok( hello_joe("brix"), "Hello,Brix!" );
});

QUnit.test( 'number_list', function( assert ) {
  assert.ok( number_list(10), [1,2,3,4,5,6,7,8,9,10].toString() );
});

QUnit.test( 'sum_numbers', function( assert ) {
  assert.ok( sum_numbers(10), 55 );
});