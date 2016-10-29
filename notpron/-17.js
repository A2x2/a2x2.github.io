arr = [[2, 0, 1, 0, 2], [0, 1, 0, 1, 0], [1, 0, 2, 0, 1], [0, 1, 0, 1, 0], [2, 0, 1, 0, 2]];
st = [];
prev = [JSON.stringify(arr)];
updateSteps();
setColours();

function setColours() {
	var t = document.getElementsByTagName('td');
	for (var i = 0; i < 25; i++) {
		var co = t[i].getAttribute('onclick').substr(2, 3).split(',');
		var x = parseInt(co[0]);
		var y = parseInt(co[1]);
		t[i].className = "tile-" + arr[y][x].toString();
	}
}

function inc(x, y) {
	if (arr[y][x] < 2) arr[y][x]++;
	else arr[y][x] = 0;
}

function c(x, y, el) {
	var t = document.getElementsByTagName('td');
	inc(x, y);
	if (x > 0) inc(x - 1, y);
	if (x < 4) inc(x + 1, y);
	if (y > 0) inc(x, y - 1);
	if (y < 4) inc(x, y + 1);

	el.className = "tile-" + arr[y][x].toString();
	st.push(x.toString() + ',' + y.toString());
	prev.push(JSON.stringify(arr));
	setColours();
	updateSteps();
}

function updateSteps() {
	var dv = document.getElementById("steps");
	while (dv.firstChild) {
	    dv.removeChild(dv.firstChild);
	}
	for (var i = 0; i < st.length; i++) {
		dv.appendChild(document.createTextNode((i + 1).toString() + '. ' + st[i]))
		dv.appendChild(document.createElement('br'));
	}
}

function undo() {
	if (prev.length > 1) {
		prev.pop();
		arr = JSON.parse(prev[prev.length - 1]);
		st.pop();
		setColours();
		updateSteps();
	} else {
		alert('Cannot undo!');
	}
}