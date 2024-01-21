$(document).ready(function() {
	$('div.parent div').click(function() {
		$('#console').css('display', 'block');
		$('#console').append('<p style="color: ' + $(this).css('background-color') + ';">' + $(this).css('background-color') + '</p><br>');
		$('#console').scrollTop($('#console')[0].scrollHeight);
	});
	$(window).resize(function() {
		$('#console').scrollTop($('#console')[0].scrollHeight);
	});
});