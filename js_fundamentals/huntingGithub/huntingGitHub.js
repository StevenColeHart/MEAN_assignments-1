$(document).ready(function(){
	$("#clickMe").click(function(){
		$.get("https://api.github.com/users/ngm01", displayName)
		console.log("This works");

		function displayName(data){
			console.log(data);
			$("#showName").append("<li>" + data.name + "</li>");
		}
	})
})