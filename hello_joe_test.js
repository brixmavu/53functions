TestMyCode.run("testing hello_joe function", function(assert){
    //Joe
    var result = hello_joe("Joe");
    assert.equals("Hello!", result);
    //Bob
    var result = hello_joe("Bob");
    assert.equals("Hello!", result);
    //Name
    /*var result = hello_joe("Name");
    assert.equals("Hello, Name!", result);*/
 
});