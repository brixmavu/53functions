TestMyCode.run("testing sum_numbers function", function(assert){
    var result = sum_numbers(10);
    // is the result as we expected?
    assert.equals(55, result);
});