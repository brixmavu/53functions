TestMyCode.run("testing hello_uppercase function", function(assert){
    //Joe
    var result = hello_joe("Joe");
    assert.equals("Hello!", result);
    //Bob
    var result = hello_joe("Bob");
    assert.equals("Hello!", result);
 
});