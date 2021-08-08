let inputs = document.querySelectorAll('input');
let telephone = inputs[0];
telephone.value = '+7 (___) ___-__-__ ';
function replacingUnderscoresWithoutLetters(key) {
	//let bool = doWeIncludeLetters;
	//console.log(key);
	let boolean;
	boolean = /\d/.test(key);
	// function returnSpecialKeys() {
	// 	return (
	// 		key == 'ArrowLeft' ||
	// 		key == 'ArrowRight' ||
	// 		key == 'Delete' ||
	// 		key == 'Backspace'
	// 	);
	// }
	//returnSpecialKeys();
	let tmpvalue = telephone.value;
	if (boolean) {
		let value = tmpvalue.replace(/\_/, key);
		telephone.value = value;
	}
	//if (!bool) let value=tmpvalue.replace(/^\+7\s\(([\d_]{1,3})\)_+\s$/)
}

telephone.addEventListener('keypress', function (event) {
	if (
		event.key == 'ArrowLeft' ||
		event.key == 'ArrowRight' ||
		event.key == 'Delete' ||
		event.key == 'Backspace'
	) {
		replacingUnderscoresWithoutLetters(event.key);
	} else {
		let bool = /\d/.test(event.key);
		//console.log(bool);
		if (bool) {
			replacingUnderscoresWithoutLetters(event.key);
			let index = telephone.value.indexOf('_');
			if (index == -1) return;
			else {
				let range = new Range();
				range.setStart(this.parentNode, index);
				range.setEnd(this.parentNode, index);
			}
		} else return event.preventDefault();
	}
});
