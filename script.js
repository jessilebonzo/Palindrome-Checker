const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const text = textInput.value.trim();

  if (!text) {
    alert('Please input a value');
    return;
  }

  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (cleanText === cleanText.split('').reverse().join('')) {
    result.textContent = `${text} is a palindrome`;
  } else {
    result.textContent = `${text} is not a palindrome`;
  }
});
