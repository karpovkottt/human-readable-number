module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const tens2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result = '';
    let arrayDigit = Array.from(number.toString());
    let firstDigit = arrayDigit[0];
    let secondDigit = arrayDigit[1];
    let thirdDigit = arrayDigit[2];

    if(number === 0) {
        result = 'zero';
    } else if(number < 10) {
        result = units[number];
    } else if(number < 20) {
        result = tens2[number - 10];
    } else if(number >19 && number < 100) {
        result = `${tens[firstDigit]} ${units[secondDigit]}`;
    } else if(secondDigit === '0') {
        result = `${units[firstDigit]} hundred ${units[thirdDigit]}`;      
    } else if(secondDigit === '1'){
        result = `${units[firstDigit]} hundred ${tens2[thirdDigit]}`;
    } else {
        result = `${units[firstDigit]} hundred ${tens[secondDigit]} ${units[thirdDigit]}`;
    }
  return result.trimEnd();
}
