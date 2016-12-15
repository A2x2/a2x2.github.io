const input = document.getElementById('input-id');
const results = document.getElementById('results');

function keypress(el, event) {
	if (event.keyCode == 13) check();
}

function check() {
	const value = input.value;
	const scroll = window.scrollTop;

	if (value == '') {
		results.innerHTML = '<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Did you really expect a result without typing in anything?</div>';
		return;
	}

	let resultsHTML = '<table class="table table-striped"><tr><th id="cipher">Cipher</th><th>Result</th></tr>';
	resultsHTML += `<tr><td>Atbash</td><td class="result">${atbash(value)}</td></tr>`;
	resultsHTML += `<tr><td>Reverse</td><td class="result">${reverse(value)}</td></tr>`;

	for (let i = 1; i < 26; i++) {
		resultsHTML += `<tr><td>ROT-${i}</td><td class="result">${rot(value, i)}</td></tr>`;
	}

	results.innerHTML = resultsHTML;
	window.scrollTop = scroll;
	transition.begin(results, "opacity 0 1 250ms linear");
}

function atbash(str) {
	let res = '';
	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lowercase = 'abcdefghijklmnopqrstuvwxyz';
	for (let char of str) {
		if (uppercase.includes(char)) res += uppercase[25 - uppercase.indexOf(char)];
		else if (lowercase.includes(char)) res += lowercase[25 - lowercase.indexOf(char)];
		else res += char;
	}
	return res;
}

function reverse(str) {
	return [...str].reverse().join('');
}

function rot(str, n) {
	return str.replace(/[a-zA-Z]/g, char => String.fromCharCode((char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + n) ? char : char - 26));
}