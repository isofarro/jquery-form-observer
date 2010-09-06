jQuery Form Observer
====================

Observes the human interaction with a form, collecting details like which fields the visitor has interacted with, what validation messages they encounter.

Uses jQuery 1.4.2.

Usage
-----

 $('form.signup')
	.observeForm({
		validation: 'label.error'
	});
	
 $('form.signup')
	.bind('form.validation', function(e, msg){
		console.log(msg.type + '[' + msg.name + '] ' + msg.error);
	})
	.bind('form.activity', function(e, msg){
		console.log(msg.type + '[' + msg.name + ']: User Activity');
	});