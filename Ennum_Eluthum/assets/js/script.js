




// loader
$(window).on("load", function () {
	$(".preloader").fadeOut("slow");;
});
	
AOS.init();
//   scroll

// document.querySelector('#navbarDropdown').addEventListener('click', function(event) {
// 	event.preventDefault();
	
//   });
	  $(".svg").click(function(){

		const targetContainer = $('.main');
		$('html, body').animate({
			scrollTop: targetContainer.offset().top
		},100);
	})