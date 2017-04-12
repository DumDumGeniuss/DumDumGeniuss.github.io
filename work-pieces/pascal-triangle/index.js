function showPascalTrangle() {
	var rowCounts = document.getElementById('rowCounts').value,
		mainArea = document.getElementById('main-area'),
		numberCheck = /[0-9]+/;
	
	if(!numberCheck.test(rowCounts) || parseInt(rowCounts) > 300) {
		alert('Please input number, or it is too large');
		return;
	};

	mainArea.innerHTML = "";

	creatPascalElement(mainArea, rowCounts);


};

function creatPascalElement(mainArea, rowCounts) {
	var DIV,
		pascalCurrentArray = [1];

	for(var i = 0; i < rowCounts; i++) {
		DIV = document.createElement("DIV");
		DIV.setAttribute("class", "custom-div");
		DIV.innerHTML = popToString(pascalCurrentArray);
		mainArea.appendChild(DIV);
		pascalCurrentArray = getNextPascalArray(pascalCurrentArray);
	}
};

function popToString(array) {
	var output = " ";

	for(var i = 0; i < array.length; i++) {
		output += array[i] + " ";
	};

	return output;
};

function getNextPascalArray(array) {
	var newArray=[];

	array.unshift(0);
	array.push(0);

	for(var i = 0; i < array.length-1; i++) {
		newArray.push(array[i] + array[i+1])
	};

	return newArray;
};