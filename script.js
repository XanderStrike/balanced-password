left_hand = '12345qwertasdfgzxcvb';
right_hand = '67890yuiophjklnm';

left_special = '!@#$%';
right_special = '^&*()_+-=[]{}|;:,.<>?';

function sample(str, useCaps) {
  var char = str.charAt(Math.floor(Math.random() * str.length));
  if (useCaps && Math.random() < 0.25 && char.match(/[a-z]/i)) {
    return char.toUpperCase();
  }
  return char;
}

function hasSpecialChar(str) {
  return str.match(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/) !== null;
}

function hasCapitalLetter(str) {
  return str.match(/[A-Z]/) !== null;
}

function generate(len, includeSpecial, useCaps) {
  var pass;
  do {
    pass = '';
    for (var i=0; i < len; i = i + 2) {
      var useSpecial = includeSpecial && Math.random() < 0.25;
      
      if (useSpecial) {
        pass = pass + sample(left_special) + sample(right_special);
      } else {
        pass = pass + sample(left_hand, useCaps) + sample(right_hand, useCaps);
      }
    }
    
    // Check if password meets all selected criteria
    var isValid = true;
    if (includeSpecial && !hasSpecialChar(pass)) {
      isValid = false;
    }
    if (useCaps && !hasCapitalLetter(pass)) {
      isValid = false;
    }
  } while (!isValid);
  
  return pass;
}

document.addEventListener('DOMContentLoaded', function() {
  const generateBtn = document.getElementById('generate');
  const lengthInput = document.getElementById('length');
  const lengthDisplay = document.getElementById('length-display');
  const specialInput = document.getElementById('special');
  const capsInput = document.getElementById('caps');
  const resultDiv = document.getElementById('result');
  const copyBtn = document.getElementById('copy');

  // Update the display when slider moves
  lengthInput.addEventListener('input', function() {
    lengthDisplay.textContent = this.value;
  });

  generateBtn.addEventListener('click', function(e) {
    const length = parseInt(lengthInput.value);
    const includeSpecial = specialInput.checked;
    const useCaps = capsInput.checked;
    const pass = generate(length, includeSpecial, useCaps);

    resultDiv.textContent = pass;
    // Show copy button when we have a password
    copyBtn.style.display = pass ? 'block' : 'none';
  });

  copyBtn.addEventListener('click', async function() {
    const text = resultDiv.textContent;
    try {
      await navigator.clipboard.writeText(text);
      
      // Visual feedback
      const originalText = this.textContent;
      this.textContent = 'Copied!';
      setTimeout(() => {
        this.textContent = originalText;
      }, 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });

  // Initially hide copy button
  copyBtn.style.display = 'none';
});
