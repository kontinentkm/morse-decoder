const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let array = [];

	for (let i = 0; i < expr.length; i += 2) {
		array.push(expr.substring(i, i + 2));
	}

	let arrayLength = array.length;
	let newArray = [];

	for (let i = 0; i < arrayLength / 5; i++) {
		newArray.push(array.slice(0, 5))
		array.splice(0, 5)
	}
		
	return newArray
	.map(arr => {
		return arr.filter(num => {
			return num !== '00'
		})
		.map((num, i) => {
			if (num === '10') {
				arr[i] = '.'
			}
			if (num === '11') {
				arr[i] = '-'
			}
			return arr[i]
		})
		.join('')
	})
	.map((element, i) => {
		if (element === '**********') {return newArray[i] = ' '}
		newArray[i] = MORSE_TABLE[element]
		return newArray[i]
	})
	.join('')
}

module.exports = {
    decode
}