document.addEventListener('DOMContentLoaded', (event) => {
    const enteredWord = document.getElementById("text-input");
    const checkBtn = document.getElementById("check-btn");
    const result = document.getElementById("result");

    function checkPalindrome(word) {
        if (word === "") {
            alert("Please input a value");
            return;
        }

        const cleanedWord = word.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        const reversedWord = cleanedWord.split('').reverse().join('');

        if (cleanedWord === reversedWord) {
            result.textContent = `${word} is a palindrome`;
        } else {
            result.textContent = `${word} is not a palindrome`;
        }
    }

    checkBtn.addEventListener("click", () => {
        checkPalindrome(enteredWord.value);
    });
});
