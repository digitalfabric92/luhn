// ======================================================================================================================
// LUHN - how does it work?
// ======================================================================================================================

var IN = 7992739871;
var x = 3;

function check(IN){

    var digits = String(IN).split('');
    //digits.splice(-1,1)
    //digits.push('x');
    console.log("ORIG DIGITS: " + digits);
    var sum = 0;
    var modulo = 0;
    var length = digits.length;

    // Double every second digit
    for (var i = length - 1; i >= 0; i--){
        if ((i+1) % 2 === 0)
            digits[i] = 2 * digits[i];
    }
    console.log("DOUB DIGITS: " + digits);

    // Create sum digit array
    var sumDigits = digits;
    for (var i = length - 1; i >= 0; i--){
        sumDigits[i] = Number(sumDigits[i]);
        if (sumDigits[i] >= 10){
            sumDigits[i] = String(sumDigits[i]).split('');
            var dig = sumDigits[i];
            sumDigits[i] = Number(dig[0]) + Number(dig[1]);
            }
        sum = sumDigits.reduce((A, B) => A + B, x);
    }
    console.log("DIGITS TO SUM: " + sumDigits + " CHECK DIGIT: " + x);
    console.log("LUHN SUM: " + sum);

    // Calculate modulo 10;
    modulo = sum % 10;

    if (modulo === 0){
        return true;
    } else if (modulo !== 0){
        return false;
    }

}

console.log("LUHN CHECK: " + check(IN));

// ======================================================================================================================
