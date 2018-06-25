document.getElementById("calculate-button").onclick = function() {
	// Collect numbers inside the input boxes
	let textbox1 = document.getElementById('textbox-1');
	let textbox2 = document.getElementById('textbox-2');

	let val1 = parseInt(textbox1.value);
	let val2 = parseInt(textbox2.value);

	// If no value has been entered in the textbox-1
	 
	 if(isNaN(val1)) {
        alert('xiii! Nada foi detectado em uma das ou em ambas as caixas de texto. A sigla "NaN" aparecerá indicando que não há "Nenhum algarismo Novo". Então, insira valores na calculadora e obtenha seu cálculo supremo! ;)');
        document.getElementById('textbox-1').focus();
    // If no value has been entered in the textbox-2
    } else if(isNaN(val2)) {
        alert('xiii! Nada foi detectado em uma das ou em ambas as caixas de texto. A sigla "NaN" aparecerá indicando que não há "Nenhum algarismo Novo". Então, insira valores na calculadora e obtenha seu cálculo supremo! ;)');
        document.getElementById('textbox-2').focus();
}

	
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult('val1, val2, operation');

	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;
	
	
	//Mostrar o resultado dentro do elemtento com id = "result"
	if (operation === '+') {
		resultElement.innerText = val1 + val2;
	} else if (operation === '-') {
	 resultElement.innerText = val1 - val2;
	} else if (operation === '*') {
		resultElement.innerText = val1 * val2;
	} else if (operation === '/') {
		resultElement.innerText = val1 / val2;
	}

}

/**
*Return the result of an operation over two numbers.
*Arguments; two valid numbers and one operation symbol.
*Supports sum, subtraction, multiplication and division.
*/
function getResult(val1, val2, operation) {
	if (operation === '+') {
		return val1 + val2;
	} else if (operation === '-') {
		return val1 - val2;
	}else if (operation === '*') {
		return val1 * val2;
	}else if (operation === '/') {
		return val1 / val2;
	}
}   
