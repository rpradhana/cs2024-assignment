/* http://youmightnotneedjquery.com/#ready */
var ready = function(fn) {
	if (document.readyState != 'loading') {
		fn();
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	} else {
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState != 'loading')
				fn();
		});
	}
}

ready(function() {
	attachClassToggle($('.dropdown'), 'is-active');
	attachClassToggle($('.navbar-burger'), 'is-active');
});

var attachClassToggle = function(selector, className) {
	var $selector = Array.prototype.slice.call(selector, 0);

	// Check if there are any target
	if ($selector.length > 0) {

		// Add a click event on each of them
		$selector.forEach(function ($el) {
			$el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var target = $el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle(className);
				$target.classList.toggle(className);

			});
		});
	}
}

/**
 * Navigation shadow scroll toggle
 */

var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.onscroll = function() {
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > 0) {
		console.log('scrollTop > 0');
		document.querySelectorAll('.navbar')[0].classList.remove('shadow-is-hidden');
	}
	else if (scrollTop == 0) {
		console.log('scrollTop == 0');
		document.querySelectorAll('.navbar')[0].classList.add('shadow-is-hidden');
	}
}