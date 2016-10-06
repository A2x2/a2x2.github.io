function changeHeader(mode) {
	var headers = [":3.4605 '3", "{¥¥+ ]+}¥|"];
	document.getElementsByTagName('h1')[0].innerHTML = headers[mode];
}

function decode() {
	var mode = document.getElementsByTagName('select')[0].value;
	var i = document.getElementsByTagName('textarea')[0];
	var o = document.getElementsByTagName('textarea')[1];
	var iv = i.value.toLowerCase().split('');
	var	ov = [];
	var a1 = ["1234567890-/:;()$&@zx.,?!' ".split(''),
			  "[]{}#%^*+=_\\|~<>€£¥zx.,?!' ".split('')];
	var a2 =  "qwertyuiopasdfghjklzxcvbnm ".split('');

	o.value = '';

	for (var x = 0; x < iv.length; x++) {
		var ax = a1[mode].indexOf(iv[x]);
		if (ax != -1) {
			ov.push(a2[ax]);
		}
		else {
			ov.push(iv[x]);
		}				
	}

	o.value = ov.join('');
}

function encode() {
	var mode = document.getElementsByTagName('select')[0].value;
	var i = document.getElementsByTagName('textarea')[1];
	var o = document.getElementsByTagName('textarea')[0];
	var iv = i.value.toLowerCase().split('');
	var	ov = [];
	var a1 = ["1234567890-/:;()$&@zx.,?!' ".split(''),
			  "[]{}#%^*+=_\\|~<>€£¥zx.,?!' ".split('')];
	var a2 =  "qwertyuiopasdfghjklzxcvbnm ".split('');

	o.value = '';

	for (var x = 0; x < iv.length; x++) {
		var ax = a2.indexOf(iv[x]);
		if (ax != -1) {
			ov.push(a1[mode][ax]);
		}
		else {
			ov = [];
			alert('Invalid character "' + iv[x] + '" found: only letters and spaces allowed');
			break;
		}				
	}

	o.value = ov.join('');
}