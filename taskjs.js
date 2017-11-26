

var checboxSet = [];

$(document).ready(function(){
	$("#checkAll").click(function () {
		
		$("input:checkbox").each(function(){
			$(this).attr('checked', true);
		});
		
	});	
	
	$("#addChackBoxBtn").click(function () {
		var person = prompt("Please enter your name");
		if (person.trim() != "" && checboxSet.indexOf(person.trim()) == -1) {
			checboxSet.push(person.trim());
			createCheckBox();
		} else {
			alert("element is already there or the box is empty")
		}
	});
	
	$("#removeChackBoxBtn").click(function () {
		var person = prompt("Which one should  remove");
		if (person.trim() != "" && checboxSet.indexOf(person.trim()) > -1) {
			checboxSet.splice(checboxSet.indexOf(person.trim()), 1 );
			createCheckBox();
		} else {
			alert("element is not there or the box is empty")
		}
		
	});
	
	function createCheckBox(){
		$("#addChackBox").html("");
		checboxSet.forEach(function(item, index){
			$("#addChackBox").append("<input type='checkbox' id='"+item+"'>" + item + "<br>");	
		});	
	}
	
	$("#status").click(function () {
		var selectedBox = "";
		var unselecteBox = "";
		$("input:checkbox").each(function(){
			if($(this).prop("checked") == false){
				unselecteBox = unselecteBox  +" " +($(this).attr('id')).toString();
			} else {
				selectedBox = selectedBox +" " +($(this).attr('id')).toString();
				debugger;
			}
		});
		debugger;
		alert( "unselectedBox  " + selectedBox);
		
	});
});




