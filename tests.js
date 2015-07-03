QUnit.test( 'hello', function( assert ) {
  assert.equal( helloWorld(), "hello world!" );
});

QUnit.test( 'hello_uppercase', function( assert ) {
  assert.equal( hello_uppercase("brix"), "Hello, BRIX!" );
});

QUnit.test( 'hello_joe', function( assert ) {
  assert.equal( hello_joe("Joe"), "Hello!" );
  assert.equal( hello_joe("Bob"), "Hello!" );
  assert.equal( hello_joe("brix"), "Hello,brix!" );
});

QUnit.test( 'number_list', function( assert ) {
  assert.equal( number_list(10), [1,2,3,4,5,6,7,8,9,10].toString() );
});

QUnit.test( 'sum_numbers', function( assert ) {
  assert.equal( sum_numbers(10), 55 );
});

QUnit.test( 'length', function( assert ) {
  assert.equal( length("water"), 5 );
});

QUnit.test( 'upper', function( assert ) {
  assert.equal( upper("water"), "WATER" );
});

QUnit.test( 'reverse', function( assert ) {
  assert.equal( reverse("water"), "retaw" );
});

QUnit.test( 'hello_list', function( assert ) {
  assert.equal( hello_list(3), "hello world,hello world,hello world" );
});

QUnit.test( 'high_low', function( assert ) {
    /* min/max number in an array */
  assert.deepEqual( high_low([5, 6, 2, 3, 7]),"max =7,min =2");
});
