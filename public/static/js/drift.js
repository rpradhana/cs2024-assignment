/**
 * Drift widget
 */

drift.load('uawdy669pkxd');

(function() {
	var DRIFT_CHAT_SELECTOR = '.drift'
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

	/* http://youmightnotneedjquery.com/#each */
	function forEachElement(selector, fn) {
		var elements = document.querySelectorAll(selector);
		for (var ii = 0; ii < elements.length; ii++) {
			fn(elements[ii], ii);
		}
	}

	function openSidebar(driftApi, event) {
		event.preventDefault();
		driftApi.sidebar.open();
		return false;
	}

	ready(function() {
		drift.on('ready', function(api) {
			// Hide by default
			api.widget.show();
			var handleClick = openSidebar.bind(this, api);
			forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
				el.addEventListener('click', handleClick);
			});
		});
	});
})();