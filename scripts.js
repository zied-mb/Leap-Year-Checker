function checkLeapYear() {
    const year = document.getElementById('yearInput').value;
    const result = isLeapYear(year);
    document.getElementById('leapYearResult').innerText = result ? `${year} is a leap year.` : `${year} is not a leap year.`;
  }
  
  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Example usage:
  console.log(isLeapYear(2024)); // ➞ true
  console.log(isLeapYear(2023)); // ➞ false
  console.log(isLeapYear(2000)); // ➞ true
  console.log(isLeapYear(1900)); // ➞ false
  