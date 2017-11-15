var remScale = 16;

$(function() {
	var draggable      = $('.sub-category__tabs.is-draggable');
	var draggableWidth = parseInt(draggable.width(), 10);
	var containerWidth = parseInt($(window).width(), 10) - 2 * 24; // minus padding 1.5rem

	// Set nav to be draggable
	draggable.draggable({
		axis: "x",
		containment: 'draggable'
	});


	draggable.on('drag', function(event, ui) {
		console.log('DRAG!');
		console.log(containerWidth + '  ');
		console.log(draggableWidth);
		// Clamp scroll position within container edges
		if(ui.offset.left > 0) {
			ui.position.left = 0;
		}
		if (ui.position.left < containerWidth - draggableWidth) {
			ui.position.left = containerWidth - draggableWidth;
		}
	});
});
