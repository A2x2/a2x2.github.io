input = document.getElementsByTagName('input')[0];
fieldVisible = false;

function atbash(s) {
	var a = [
		'abcdefghijklmnopqrstuvwxyz'.split(""),
		'zyxwvutsrqponmlkjihgfedcba'.split("")
	];
	var b = s.split("");
	var c = [];
	for (var i = 0; i < b.length; i++) {
		c[i] = a[0].indexOf(b[i]) > -1 ? a[1][a[0].indexOf(b[i])] : b[i];
	}
	return c.join("");
}

function rev(s) {
	return s.split("").reverse().join("");
}

function rot(s, n) {
	var a = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split("");
	var b = s.split("");
	var c = [];
	for (var i = 0; i < b.length; i++) {
		c[i] = a.indexOf(b[i]) > -1 ? a[a.indexOf(b[i]) + n] : b[i];
	}
	return c.join("");
}

function rotRender(s) {
	var rd = document.createElement('div');
	rd.id = "rot";
	for (var i = 1; i < 26; i++) {
		var b = document.createElement('b');
		b.innerHTML = "ROT-" + i.toString() + ": ";
		var sp = document.createTextNode(rot(s, i));
		rd.appendChild(b);
		rd.appendChild(sp);
		rd.appendChild(document.createElement('br'));
	}
	return rd;
}

function analyse() {
	var r = document.getElementById('results');
	r.removeAttribute("hidden");
	var val = input.value.toLowerCase();
	document.getElementById('atbash').innerHTML = atbash(val);
	document.getElementById('reverse').innerHTML = rev(val);

	var rotdiv = document.getElementById('rot');
	r.removeChild(rotdiv);
	r.appendChild(rotRender(val));
}