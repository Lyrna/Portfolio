$(document).ready(function(){
	$('.tri').click(function(){
		const value = $(this).attr('data-filter');
			if (value == 'all'){
				$('.box').show('1000');
			} else {
				$('.box').not('.'+value).hide('1000');
				$('.box').filter('.'+value).show('1000');
			}
	})

	$('.tri').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})