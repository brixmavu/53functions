var hello = require("./hello_joe.js");

test("hello_joe", function(assert){
    //Joe
   equal( "Hello!", hello.hello_joe("Joe"), "We expect value to be Hello!" );
 
});

test("hello_Bob", function(assert){
    //Joe
   equal( "Hello!", hello.hello_joe("Bob"), "We expect value to be Hello!" );
 
});

test("hello_name function", function(assert){
  
    //Name from else function
    var result = hello_joe("Brix");
    equal("Hello,Brix!", hello.hello_joe("Brix"), "We expect value to be Hello,Brix!");
 
});