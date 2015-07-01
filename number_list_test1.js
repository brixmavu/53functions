var hello = require("./number_list.js");

test("number_list function", function(assert){
    //var result = number_list(10);
    // is the result as we expected?
    equal([1,2,3,4,5,6,7,8,9,10].toString(), hello.number_list(10),"We expect looping 1 - 10 using a parameter");
});

