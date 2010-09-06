jQuery Form Observer
====================

Observes the human interaction with a form, collecting details like which fields the visitor has interacted with, what validation messages they encounter.

Uses jQuery 1.4.2.

Usage
-----

	// Initiate form observer on a form
	$('form.signup')
		.observeForm({
			// The selector for validation messages 
			// (relative to the form selector)
			validation: 'label.error'
		});
	
	// Register for the form-observer events
	$('form.signup')
		.bind('form.validation', function(e, msg){
			console.log(msg.type + '[' + msg.name + '] ' + msg.error);
		})
		.bind('form.activity', function(e, msg){
			console.log(msg.type + '[' + msg.name + ']: User Activity');
		});
	
	
Validation messages
-------------------

The eventType is `form.validation`. The data structure passed through for validation messages looks as follows:

	{
		type:  'validation.server', // the type of message
		name:  'email',             // The form field name
		label: 'Email Address',     // The form field label
		error: 'The error message displayed to the visitor'
	}

For javascript validation messages the type becomes `validation.javascript`


Activity messages
-----------------

The eventType is `form.activity`. The data structure for field activity messages looks as follows:

	{
		type: 'activity.field',
		name: 'email'
	}


Demonstration
-------------

Take a look at example.html for a working demonstation of the form observer.


