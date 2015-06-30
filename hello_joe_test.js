TestMyCode.run("testing hello_joe function", function(assert){
    //Joe
    var result = hello_joe("Joe");
    assert.equals("Hello!", result);
 
});

TestMyCode.run("testing hello_bob function", function(assert){
    //Bob
    var result = hello_joe("Bob");
    assert.equals("Hello!", result);

});

TestMyCode.run("testing hello_brix function", function(assert){
  
    //Name
    var result = hello_joe("Brix");
    assert.equals("Hello,Brix!", result);
 
});