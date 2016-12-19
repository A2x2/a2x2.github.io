const Identifiers = {
	alphabet: str => {
		return /^[\d\s\-]+$/.test(str) && str.trim().split(/[\s\-]/).every(x => parseInt(x) > 0 && parseInt(x) <= 26);
	},
	hex: str => {
		return /^[a-fA-F0-9\s]+$/.test(str) && str.replace(/\s/g, '').length % 2 == 0;
	},
	dec: str => {
		return /^[\d\s]+$/.test(str) && str.trim().split(' ').every(x => x.length == 2 || x.length == 3);
	},
	oct: str => {
		return /^[0-7\s]+$/.test(str) && str.trim().split(' ').every(x => x.length == 2 || x.length == 3);
	},
	bin: str => {
		return /^[0-1\s]+$/.test(str) && str.replace(/\s/g, '').length % 8 == 0;
	},
	base64: str => {
		return /^[\w+\/=]+$/.test(str);
	},
	base32: str => {
		return /^[A-Z0-9=]+$/.test(str);
	},
	ascii85: str => {
		return !/\s/.test(str.trim());
	},
	tapcode: str => {
		return /^(\.{1,5}[ \/]+)+$/.test(str + ' ') && str.trim().split(/ ?\/ ?| +/).length % 2 == 0;
	},
	morse: str => {
		return /^[.\-\/ ]+$/.test(str);
	},
	nato: str => {
		return /^(\[?[A-Za-z\-]{3,}\]? )+$/.test(str.trim() + ' ');
	},
	baconian: str => {
		return /^[ABab\s]+$/.test(str) && str.replace(' ', '').length % 5 == 0;
	}
};