// Check if input is a positive whole number.

// Run a function to do the conversion.
function convert(decNum) {
// Clean up the output area.
  var output = document.getElementById("output"); // Define the area for output.

  while (output.hasChildNodes()) {   // Clear the output area.
    output.removeChild(output.childNodes[0]);
  };
// Clean up any bad input.
  var posInt = Math.abs(decNum);   //Change negative to positive.

  var wholePosInt = Math.floor(posInt);   // Round down any floating point numbers.

// Parsing the number.
  var numString = wholePosInt.toString();   // Convert the Number to a string.

  var numArray = numString.split("");  // Convert the String to an Array.

// Parse the string array and find the value at each number place.
  var thousandsPlaceValue = parseInt(numArray[numArray.length-4]);
  var hundredsPlaceValue = parseInt(numArray[numArray.length-3]);
  var tensPlaceValue = parseInt(numArray[numArray.length-2]);
  var onesPlaceValue = parseInt(numArray[numArray.length-1]);

// Roman Numeral Libraries
  var thousands = ["","M","MM","MMM"];
  var hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var tens = ["","X","XI","XII","XIII","XL","L","LI","LII","LIII","XC"];
  var ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

  /* Each statement will use the value of its place to lookup the Roman Numeral.
  If the number value is zero or does not exist, it will be skipped.*/

  if (wholePosInt > 999 && thousandsPlaceValue != 0) {
    var romThousands = thousands[thousandsPlaceValue];
    // Add the roman numberal to the output.
    var spanTho = document.createElement('span');
    var resTho = document.createTextNode(romThousands);
    spanTho.appendChild(resTho);
    output.appendChild(spanTho);
  };

  if (wholePosInt > 99 && hundredsPlaceValue != 0) {
    var romHundreds = hundreds[hundredsPlaceValue];
    // Add the roman numberal to the output.
    var spanHun = document.createElement('span');
    var resHun = document.createTextNode(romHundreds);
    spanHun.appendChild(resHun);
    output.appendChild(spanHun);
  };

  if (wholePosInt > 9 && tensPlaceValue != 0) {
    var romTens = tens[tensPlaceValue];
    // Add the roman numberal to the output.
    var spanTen = document.createElement('span');
    var resTen = document.createTextNode(romTens);
    spanTen.appendChild(resTen);
    output.appendChild(spanTen);
  };

  if (wholePosInt > 0) {
    var romOnes = ones[onesPlaceValue];
    // Add the roman numberal to the output.
    var spanOne = document.createElement('span');
    var resOne = document.createTextNode(romOnes);
    spanOne.appendChild(resOne);
    output.appendChild(spanOne);
  };

};
