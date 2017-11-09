var remScale = 16;

$(function() {
	var draggable      = $('.sub-category__tabs.is-draggable');
	var draggableWidth = parseInt(draggable.width(), 10);
	var containerWidth = parseInt($('.sub-category__container').width(), 10);

	// Set nav to be draggable
	draggable.draggable({
		axis: "x",
		containment: 'draggable'
	});


	draggable.on('drag', function(event, ui) {
		// Clamp scroll position within container edges
		if(ui.offset.left > 0) {
			ui.position.left = 0;
		}
		if (ui.position.left < -draggableWidth + containerWidth) {
			ui.position.left = -draggableWidth + containerWidth;
		}
	});
});
