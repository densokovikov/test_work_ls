$().ready(function() {


	$(".event_1").find("input").click(function() {
		$(".event_1").css('opacity','0.3').slideUp(4000);
	});
	$(".event_2").find("input").click(function() {
		$(".event_2").css('opacity','0.3').slideUp(4000);
	});
	$(".event_3").find("input").click(function() {
		$(".event_3").css('opacity','0.3').slideUp(4000);
	});
	$(".event_4").find("input").click(function() {
		$(".event_4").css('opacity','0.3').slideUp(4000);
	});;
	$(".event_5").find("input").click(function() {
		$(".event_5").css('opacity','0.3').slideUp(4000);
	});
	$(".event_6").find("input").click(function() {
		$(".event_6").css('opacity','0.3').slideUp(4000);
	});
	



	/*наведение мыши на элементы**/

$(".event_1,.event_2,.event_3,.event_4,.event_5,.event_6").hover(function(){
	$('img',this).css('border-bottom', '5px solid #8cc34b');
	$('.cat_txt_1',this).css('color', '#8cc34b');
	$('.cat_checkbox',this).css('color', '#8cc34b');
},
		function(){
			$('img',this).css('border-bottom','5px solid #fff');
			$('.cat_txt_1',this).css('color', '#000');
			$('.cat_checkbox',this).css('color', '#727272');
});
/*
$(".event_1,.event_2,.event_3,.event_4,.event_5,.event_6").hover(function(e) { 
    $(this).css("background-color",e.type === "mouseenter"?"red":"transparent") 
})*/





/*
тренировка


	var countCheckbox=$('.work input:checkbox').length;

	$('section .work').change(function(){
		if ($('.work input:checkbox:checked').length>=countCheckbox){
			$('section .work').removeClass('.work_title_3');
		}
});
*/







});