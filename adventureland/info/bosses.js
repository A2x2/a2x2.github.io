$.getJSON("bosses.json", function(json) {
    for (key in json) {
    	if (!json.hasOwnProperty(key)) continue;
    	var m = json[key];
    	generateBossData(m, key);
    }
});

function generateBossData(data, key) {
	var t = document.getElementById('bosses');
	var tr = document.createElement('tr');
	var td = [];
	for (var i = 0; i < 7; i++) td[i] = document.createElement('td');
	td[0].innerHTML = data.name;
	td[0].className = 'mname';
	td[1].className = 'msprite';
	var sprite = document.createElement('img');
	sprite.className = 'sprite';
	sprite.setAttribute('src', 'images/bosses/' + key + '.png');
	sprite.setAttribute('onclick', 'alert(JSON.stringify(' + JSON.stringify(data, null, 4) + ', null, 4))');
	sprite.setAttribute('title', 'Click me for full boss data!');
	td[1].appendChild(sprite);
	td[2].innerHTML = ncomma(data.hp);
	td[3].innerHTML = ncomma(data.xp);
	td[4].innerHTML = data.attack;
	if (data.damage_type == "magical") {
		td[4].className = 'magic';
		td[4].setAttribute('title', 'Magic attack');
	} else {
		td[4].setAttribute('title', 'Physical attack');
	}
	td[5].innerHTML = data.respawn > 0 ? (data.respawn / 60).toString() + ' min' : "None";
	var mt = document.createElement('code');
	mt.innerHTML = key;
	mt.className = 'mtype';
	td[6].appendChild(mt);
	for (var i = 0; i < 7; i++) td[i] = tr.appendChild(td[i]);
	t.appendChild(tr);
}

function ncomma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}