(function($){
	
	var options = {};
	
	$.fn.observeForm = function(opts) {
		options = $.extend({}, opts);
		
		console.log('Starting form observer');
		
		// Look for server-side validation messages when the DOM is ready
		$(document).ready(serverValidationObserver);
		var allFieldsSel = ':input:not(:hidden)';
		
		return this
			.submit(jsValidationObserver)
			.delegate(allFieldsSel, 'focus',    fieldFocusHandler)
			.delegate(allFieldsSel, 'keypress', fieldKeypressHandler)
			.delegate(allFieldsSel, 'change',   fieldChangeHandler);

	}

	$.fn.observeForm.plugins = {
		getMessageInfo: function(label) {
			var fieldId = label.attr('for');
			
			var fieldLabel = $('label[for=' + fieldId + ']')
				.not('.error')
				.contents()
				.filter(function() {
						return this.nodeType == 3;
					})
				.text();
				
			return {
				name: $('#' + fieldId).attr('name'),
				label: fieldLabel
			}
		},
		
	}

	serverValidationObserver = function(e) {
		console.log('Observing server-side validation messages');
		if (options.validation) {
			$(options.validation).each(function(){
				var message = $.fn.observeForm.plugins.getMessageInfo($(this));
				message.type = 'validation:server';
				console.log(message);
			});
		}
	}
	
	jsValidationObserver = function(e) {
		console.log('Observing client-side validation messages');
	}
	
	userActivityObserver = function(e) {
		console.log('Observing user form activity');
	}
	
	fieldFocusHandler = function(e) {}
	fieldKeypressHandler = function(e) {}
	fieldChangeHandler = function(e) {}
	
})(jQuery);