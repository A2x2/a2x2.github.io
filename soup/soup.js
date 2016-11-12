$.getJSON("coords.json", function(json) {
    for (key in json) {
    	if (!json.hasOwnProperty(key)) continue;
    	render(json[key]);
    }
});

function render(a) {
	let c = a.c;
	let x = a.x * 2;
	let y = a.y * 2;
	let ch = $('<span></span>').css({
		position: 'absolute',
		left: x,
		top: y
	}).text(c).appendTo('body');
}