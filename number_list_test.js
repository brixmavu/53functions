TestMyCode.run("testing number_list function", function(assert){
    var result = number_list(10);
    // is the result as we expected?
    assert.equals([1,2,3,4,5,6,7,8,9,10].toString(), result.toString(),"testing number_list function");
});