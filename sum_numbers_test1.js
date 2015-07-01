var hello = require("./sum_numbers.js");

test("sum_numbers function", function(assert){
    //var result = number_list(10);
    // is the result as we expected?
    equal(55, hello.sum_numbers(10),"We expect a sum from a loop 1-10 which is 55");
});

