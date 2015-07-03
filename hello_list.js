var count = 1;
var list = [];

function hello_list(n) {
	// body...
	while (count <= n){
		console.log("hello world");
		count++;
		list.push("hello world");
	}
	return list;
}