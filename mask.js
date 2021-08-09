let inputs = document.querySelectorAll('input');
let telephone = inputs[0];
telephone.value = '+7 (___) ___-__-__ ';
function replacingUnderscoresWithoutLetters(elem, key) {
	//let bool = doWeIncludeLetters;
	//console.log(key);
	let boolean = /\d/.test(key);
	// function returnSpecialKeys() {
	// 	return (
	// 		key == 'ArrowLeft' ||
	// 		key == 'ArrowRight' ||
	// 		key == 'Delete' ||
	// 		key == 'Backspace'
	// 	);
	// }
	//returnSpecialKeys();
	if (boolean) {
		let tmpvalue = elem.value;
		let value = tmpvalue.replace(/\_/, key);
		elem.value = value;
		event.preventDefault();
	}
	//console.log(elem.value);
	//if (!bool) let value=tmpvalue.replace(/^\+7\s\(([\d_]{1,3})\)_+\s$/)
}

telephone.addEventListener('keypress', function (event) {
	if (
		event.key == 'ArrowLeft' ||
		event.key == 'ArrowRight' ||
		event.key == 'Delete' ||
		event.key == 'Backspace'
	)
		replacingUnderscoresWithoutLetters(this, event.key);
	else {
		let bool = /\d/.test(event.key);
		//console.log(bool);
		if (bool) {
			replacingUnderscoresWithoutLetters(this, event.key);
			//console.log(this.value);
			let index = telephone.value.indexOf('_');
			if (index == -1) return;
			else {
				return (this.selectionStart = this.selectionEnd = index);
			}
		} else return event.preventDefault();
	}
	//console.log(this.value);
});
function focusing() {
	this.selectionStart = this.selectionEnd = 4;
}
