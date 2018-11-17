let content = `*[[Anubhav]]: [[Srivastava]]`;

let cArr = content
	.split(':')
	.join('\n**')
	.split('\n');
let resultArr = [];
cArr.forEach(l => {
	l = l.split('**').join('  *');
	l = l.split('*').join('- ');
	if (l.trim().length < 3) return;
	// resultArr.push(l.length);
	l = l.replace(/\[\[(.*)\]\]/, function(t) {
		let c = t
			.split('[')
			.join('')
			.split(']')
			.join('');
		return `[${c}](https://en.wikipedia.org/wiki/${c.split(' ').join('_')})`;
	});
	resultArr.push(l);
});
console.log(resultArr.join('\n'));
