function hex(str) {
	let res = '';
	let formatted;

	if (!/^([A-F0-9]{2} )*[A-F0-9]{2}$/.test(str)) {
		formatted = str.toUpperCase().replace(/\s/g, '').replace(/(.{2})/g, '$1 ').trim();
		res += `<label class="result-label">Formatted Input</label><span class="result-text">${formatted}</span><br>`;
	}

	str = formatted ? formatted : str;

	const output = str.split(' ').map(x => String.fromCharCode(parseInt(x, 16))).join('');

	if (invalid(output)) return null;

	res += `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
	return res;
}

function oct(str) {
	let res = '';
	let formatted;

	if (!/^(\d{3}\s)+$/.test(str.trim() + ' ')) {
		formatted = str.trim().split(' ').map(x => x.length == 3 ? x : '0' + x).join(' ');
		res += `<label class="result-label">Formatted Input</label><span class="result-text">${formatted}</span><br>`;
	}

	str = formatted ? formatted : str;

	const output = str.trim().split(' ').map(x => String.fromCharCode(parseInt(x, 8))).join('');

	if (invalid(output)) return null;

	res += `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
	return res;
}

function bin(str) {
	let res = '';
	let formatted;

	if (!/^([0-1]{8}\s)+$/.test(str.trim() + ' ')) {
		formatted = str.trim().replace(/\s/g, '').replace(/(.{8})/g, '$1 ').trim();
		res += `<label class="result-label">Formatted Input</label><span class="result-text">${formatted}</span><br>`;
	}

	str = formatted ? formatted : str;

	const output = str.trim().split(' ').map(x => String.fromCharCode(parseInt(x, 2))).join('');

	if (invalid(output)) return null;

	res += `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
	return res;
}

function dec(str) {
	const output = str.trim().split(' ').map(x => String.fromCharCode(parseInt(x))).join('');

	if (invalid(output)) return null;

	return `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
}

function base64(str) {
	let output;
	try {
		output = window.atob(str);
	}
	catch(e) {
		return null;
	}
	
	if (invalid(output)) return null;
	return `<label class="result-label">Result</label><span class="result-text">${output.replace(/\uFFFD/g, '')}</span>`;
}

function base32(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=";

    let outputArray = [],
        chr1, chr2, chr3, chr4, chr5,
        enc1, enc2, enc3, enc4, enc5, enc6, enc7, enc8,
        i = 0;

    while (i < str.length) {
        enc1 = alphabet.indexOf(str[i++]);
        enc2 = alphabet.indexOf(str[i++] || "=");
        enc3 = alphabet.indexOf(str[i++] || "=");
        enc4 = alphabet.indexOf(str[i++] || "=");
        enc5 = alphabet.indexOf(str[i++] || "=");
        enc6 = alphabet.indexOf(str[i++] || "=");
        enc7 = alphabet.indexOf(str[i++] || "=");
        enc8 = alphabet.indexOf(str[i++] || "=");

        chr1 = (enc1 << 3) | (enc2 >> 2);
        chr2 = ((enc2 & 3) << 6) | (enc3 << 1) | (enc4 >> 4);
        chr3 = ((enc4 & 15) << 4) | (enc5 >> 1);
        chr4 = ((enc5 & 1) << 7) | (enc6 << 2) | (enc7 >> 3);
        chr5 = ((enc7 & 7) << 5) | enc8;

        outputArray.push(chr1);
        if (enc2 & 3 !== 0 || enc3 !== 32) outputArray.push(chr2);
        if (enc4 & 15 !== 0 || enc5 !== 32) outputArray.push(chr3);
        if (enc5 & 1 !== 0 || enc6 !== 32) outputArray.push(chr4);
        if (enc7 & 7 !== 0 || enc8 !== 32) outputArray.push(chr5);
    }
	const output = outputArray.map(x => String.fromCharCode(parseInt(x))).join('');

	if (invalid(output)) return null;

	return `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
}

function ascii85(str) {
	var _f = str.trim().replace(/(^<~)|(~>$)/g, '');
    var n = _f.length, r = [], b = [0, 0, 0, 0, 0], i, j, t, x, y, d;
    for (i = 0; i < n; ++i) {
        if (_f.charAt(i) == "z") {
            r.push(0, 0, 0, 0);
            continue;
        }
        for (j = 0; j < 5; ++j) {
            b[j] = _f.charCodeAt(i + j) - 33;
        }
        d = n - i;
        if (d < 5) {
            for (j = d; j < 4; b[++j] = 0) {}
            b[d] = 85;
        }
        t = (((b[0] * 85 + b[1]) * 85 + b[2]) * 85 + b[3]) * 85 + b[4];
        x = t & 255;
        t >>>= 8;
        y = t & 255;
        t >>>= 8;
        r.push(t >>> 8, t & 255, y, x);
        for (j = d; j < 5; ++j, r.pop()) {}
        i += 4;
    }
    const output = r.map(x => String.fromCharCode(parseInt(x))).join('');;

    if (invalid(output)) return null;

	return `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
};

function alphabet(str) {
	let output;

	if (str.includes('-')) output = str.trim().split(' ').map(word => word.split('-').map(ch => String.fromCharCode(parseInt(ch) + 64)).join('')).join(' ');
	else output = str.trim().split(' ').map(ch => String.fromCharCode(parseInt(ch) + 64)).join('');

	if (invalid(output)) return null;

	return `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
}

function morse(str) {
	const morseAlph = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----'];
	const normalAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

	let output = '';
	const words = str.trim().split(/ ?\/ ?/)

	for (let word of words) {
		for (let letter of word.split(' ')) {
			if (!morseAlph.includes(letter)) return null;
			output += normalAlph[morseAlph.indexOf(letter)];
		}
		if (words.indexOf(word) != words.length - 1) output += ' ';
	}
	return `<label class="result-label">Result</label><span class="result-text">${output}</span>`;
}

function invalid(str) {
	return /[^\w\s()\[\].;?!'"<>+=@#$%\^&*\|\\/\-_]/.test(str) || str.length == 0;
}