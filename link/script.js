const input = $('#input-id');
const resultsDiv = $('#results');

let identifiers = {};

$.getJSON("identifiers.json", function(json) {
    identifiers = json;
});

input.on('keypress', function (e) {
	if (e.which === 13) check();
});

function check() {
	const value = input.val();

	if (value == '') {
		resultsDiv.html('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Did you really expect a result without typing in anything?</div>');
		return;
	}

	let foundMatches = 0;
	let results = '<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> $N match found!</div><table class="table table-striped"><tr><th id="match-website">Website</th><th id="match-type">Linked Item</th><th>URL</th></tr>';
	
	for (let id of identifiers) {
		if (new RegExp(id.regex).test(value)) {
			foundMatches++;
			const link = id.url.replace('$URL', value);
			results += `<tr><td>${id.name}</td><td>${id.type}</td><td><a href="${link}">${link}</a></td></tr>`;
		}
	}
	if (foundMatches > 1) resultsDiv.html(results.replace('match', 'matches').replace('$N', foundMatches));
	else if (foundMatches == 1) resultsDiv.html(results.replace('$N', foundMatches));
	else resultsDiv.html('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> No matches found.</div>')
	transition.begin(resultsDiv[0], "opacity 0 1 250ms linear");
}