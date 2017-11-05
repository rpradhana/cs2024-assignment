/* http://youmightnotneedjquery.com/#ready */
function ready(fn) {
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

/**
 * Attach hamburger menu event handler
 */

ready(function() {

	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach(function ($el) {
			$el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var target = $el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}

});

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