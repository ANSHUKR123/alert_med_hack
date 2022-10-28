document.getElementById('drop').addEventListener('click',function(){
	var element = document.getElementById("test2");
//   element.classList.remove("dropdown-item-test");
if(element.classList.contains("dropdown-item-test")){
	element.classList.remove("dropdown-item-test");
}else{
	element.classList.add("dropdown-item-test");
}

});
//apprearance
// $("input.variation").on("click", function () {
// 	if ($(this).val() > 3) {
// 		$("body").css("background", "#111");
// 		$("footer").attr("class", "dark");
// 	} else {
// 		$("body").css("background", "#f9f9f9");
// 		$("footer").attr("class", "");
// 	}
// });

// toggle list vs card view
// $(".option__button").on("click", function () {
// 	$(".option__button").removeClass("selected");
// 	$(this).addClass("selected");
// 	if ($(this).hasClass("option--grid")) {
// 		$(".results-section").attr("class", "results-section results--grid");
// 	} else if ($(this).hasClass("option--list")) {
// 		$(".results-section").attr("class", "results-section results--list");
// 	}
// });



