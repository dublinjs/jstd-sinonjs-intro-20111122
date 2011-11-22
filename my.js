$(function(){

	$.deck.defaults.codemirror.indentUnit=2;

	$('h2').live('dragstart', function(e)
	{
		var parent = $(this).parents('section');
		var src=$(parent).find('.src textarea').data('codemirroreditor').getValue();
		var test=$(parent).find('.test textarea').data('codemirroreditor').getValue();
		
		var contents="data:text/javascript;base64,"+btoa(
			"/*********  Code  **********/\n\n"+
			src+
			"\n\n/*********  Test  **********/\n\n"+
			test);
	
		e.originalEvent.dataTransfer.setData('DownloadURL', 'text/javascript:tmp.js:'+contents);
	});
	
	$('.fill').live('click', function(e)
	{
		var slide = $(this).parents('section'),
			parent = $(this).parents('.codeblock'),
			textarea = $(parent).find('textarea');
		
		$.get($(this).attr('href'), function(txt)
		{
			$(textarea).data('codemirroreditor').setValue(txt);
		});
		
		e.preventDefault();
	});

	$('.eval').live('click', function(e)
	{
		eval($(this).parents('.codeblock').find('textarea').data('codemirroreditor').getValue());		
	});

});
