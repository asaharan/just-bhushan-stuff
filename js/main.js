
$('.list-item').on('click',function(){
	console.log('yomain')
	$('.list-item').removeClass('active');
	$(this).addClass('active');
});