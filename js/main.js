$(document).ready(function () {
	$('.main_btna').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown("slow");
	});
	$('.close').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp("slow");
	});
});