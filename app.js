chrome.tabs.query({ currentWindow:true, highlighted : true }, function(tab) {
	$('#btCxOne').hover(
		function(){
			$(this).css('background', 'red');
		},
		function(){
			$(this).css('background','white');
		}

});