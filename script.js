AudioEye JS Test

#1

function checkNum() {
	num = prompt("Please enter a number");
	if ((num >= 90) && (num <100)) {
		alert("A");
	} else if ((num >= 80) && (num <=89)) {
		alert("B");
	} else if ((num >= 72) && (num <=79)) {
		alert("C");
	} else if ((num >= 0) && (num <=71)) {
		alert("F");
	} else {
		alert("Out of range!");
	}
};
checkNum();

#2

$(document).ready(function(){
	$(".skip").click(function(){
    $("#main").focus();
    }); 
});

#3

$(document).ready(function(){
	$("a:contains('learn more')").addClass("learn"); 
});
