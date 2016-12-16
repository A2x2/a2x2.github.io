const input = document.getElementById('input-id');
const results = document.getElementById('results');

function keypress(el, event) {
	if (event.keyCode == 13) xlate();
}

function xlate() {
	const value = input.value;
	const scroll = window.scrollTop;

	if (value == '') {
		results.innerHTML = '<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Did you really expect a result without typing in anything?</div>';
		transition.begin(results, "opacity 0 1 250ms linear");
		return;
	}

	let resultsHTML = '';

	for (let id in Identifiers) {
		if (Identifiers[id].call(window, value)) {
			const r = window[id](value);
			if (r) {
				const inf = Data[id];
				resultsHTML += `<section class="result-section" style="border-left-color: ${inf.colour}"><h3 style="color: ${inf.colour};">${inf.name}</h3><h5> ~ ${inf.type}</h5><p></p>${r}</section>`;
			}
		}
	}

	if (resultsHTML.length > 0) results.innerHTML = resultsHTML;
	else results.innerHTML = '<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> No valid results found.</div>';
	window.scrollTop = scroll;
	transition.begin(results, "opacity 0 1 250ms linear");
}