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

function change_font_size() {
	let i = $('#fsize').val();
	let s = /(\d+)/.exec(i)[1];
	$('body').css({
		fontFamily: 'sans-serif',
		fontSize: `${s}px`
	});
}