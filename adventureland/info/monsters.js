$.getJSON("monsters.json", function(json) {
    for (key in json) {
    	if (!json.hasOwnProperty(key)) continue;
    	var m = json[key];
    	generateMonsterData(m, key);
    }
});

function generateMonsterData(data, key) {
	var t = document.getElementById('monsters');
	var tr = document.createElement('tr');
	var td = [];
	for (var i = 0; i < 6; i++) td[i] = document.createElement('td');
	td[0].innerHTML = data.name;
	td[0].className = 'mname';
	td[1].className = 'msprite';
	var sprite = document.createElement('img');
	sprite.className = 'sprite';
	sprite.setAttribute('src', 'images/monsters/' + key + '.png');
	sprite.setAttribute('onclick', 'alert(JSON.stringify(' + JSON.stringify(data, null, 4) + ', null, 4))');
	sprite.setAttribute('title', 'Click me for full boss data!');
	td[1].appendChild(sprite);
	td[2].innerHTML = data.hp;
	td[3].innerHTML = data.xp;
	td[4].innerHTML = data.attack;
	if (data.damage_type == "magical") {
		td[4].className = 'magic';
		td[4].setAttribute('title', 'Magic attack');
	} else {
		td[4].setAttribute('title', 'Physical attack');
	}
	var mt = document.createElement('code');
	mt.innerHTML = key;
	mt.className = 'mtype';
	td[5].appendChild(mt);
	td[5].className = 'mtype';
	for (var i = 0; i < 6; i++) td[i] = tr.appendChild(td[i]);
	t.appendChild(tr);
}