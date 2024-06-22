const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

function validatePhoneNumber(number) {
  // Updated regex pattern to include parentheses around area code (optional)
  const regex = /^1?\s?(\(\d{3}\)|\d{3})[- \s]?(\d{3})[- \s]?(\d{4})$/;
  
  // Check if input is empty
  if (!number) {
    alert('Please provide a phone number');
  }
  
  // Trim the number only after checking if it's not empty
  const trimmedNumber = number.trim();
  
  // Check if number matches the pattern
  if (!regex.test(trimmedNumber)) {
    return 'Invalid US number: ' + trimmedNumber;
  }
  
  // Return formatted valid number (preserve spaces)
  return 'Valid US number: ' + trimmedNumber;
}

checkBtn.addEventListener('click', function() {
  const number = userInput.value.trim();
  const validationResult = validatePhoneNumber(number);
  resultsDiv.textContent = validationResult;
});

clearBtn.addEventListener('click', function() {
  resultsDiv.textContent = '';
});
