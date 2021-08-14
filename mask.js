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

telephone.addEventListener('keydown', function (event) {
	if (event.key == 'ArrowLeft' || event.key == 'ArrowRight')
		replacingUnderscoresWithoutLetters(this, event.key);
	else if (event.key == 'Backspace') {
		//console.log('Cool!');
		event.preventDefault();
		deletingInMask(this);
	} else {
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

function deletingInMask(elem) {
	let value = elem.value;
	let indexOfCursor = getCaretPos(elem);
	//console.log(indexOfCursor);
	let tmpArr = value.split('');
	//console.log(tmpArr);
	if (special4Bool(String(tmpArr[indexOfCursor - 1]))) {
		//console.log(tmpArr[indexOfCursor - 1]);
		//console.log('Not cool');
		elem.selectionStart = elem.selectionEnd = --indexOfCursor;
		event.preventDefault();
	} else {
		tmpArr[--indexOfCursor] = '_';
		let str = tmpArr.join('');
		elem.value = str;
		elem.selectionStart = elem.selectionEnd = indexOfCursor;
	}
}

function getCaretPos(obj) {
	//obj.focus();

	if (obj.selectionStart) return obj.selectionStart;
	else if (document.selection) {
		let sel = document.selection.createRange();
		let clone = sel.duplicate();
		sel.collapse(true);
		clone.moveToElementText(obj);
		clone.setEndPoint('EndToEnd', sel);
		return clone.text.length;
	}

	return 0;
}

function special4Bool(literal) {
	if (literal == '(') return true;
	else if (literal == ')') return true;
	else if (literal == ' ') return true;
	else if (literal == '-') return true;
	else if (literal == '+') return true;
	else return false;
}
