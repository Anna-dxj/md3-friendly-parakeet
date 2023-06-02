const generateBtn = document.querySelector('#generate');
const clearBtn = document.querySelector('#clear');
const newGenBtn = document.querySelector('#new-pw');
const noCharsModal = document.querySelector('#no-chars');
const noCharsBtn = document.querySelector('#no-chars-btn');
const noLengthModal = document.querySelector('#no-length')
const noLengthBtn = document.querySelector('#no-length-btn');

const formDiv = document.querySelector('#form-container');
const pwDiv = document.querySelector('#password-container')
const pwContainer = document.querySelector('#password');

const clearForm = () => {
    let pwLength = document.querySelector('#pw-length');
    const chosenUpper = document.querySelector('#uppercase');
    const chosenLower = document.querySelector('#lowercase');
    const chosenNumber = document.querySelector('#numbers');
    const chosenSpecial = document.querySelector('#special');

    pwLength.value = '';
    chosenUpper.checked = false;
    chosenLower.checked = false;
    chosenNumber.checked = false;
    chosenSpecial.checked = false;
};

const handleGeneratePassword = () => {
    const pwLength = document.querySelector('#pw-length').value;
    const chosenUpper = document.querySelector('#uppercase');
    const chosenLower = document.querySelector('#lowercase');
    const chosenNumber = document.querySelector('#numbers');
    const chosenSpecial = document.querySelector('#special');

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const special = '!@#$%^&*(){}[]=<>/.,';
    
    let passwordCharacters = '';
    let newPassword = ''; 

    if (!pwLength || pwLength === null) {
        noLengthModal.setAttribute('class', 'warning-modal')
        return;
    }
    if (!chosenUpper.checked && !chosenLower.checked && !chosenNumber.checked && !chosenSpecial.checked) {
        noCharsModal.setAttribute('class', 'warning-modal')
        return;
    }

    if (chosenUpper.checked) {
        passwordCharacters += upper;
    } 
    if (chosenLower.checked) {
        passwordCharacters += lower;
    }
    if (chosenNumber.checked) {
        passwordCharacters += numbers;
    }
    if (chosenSpecial.checked) {
        passwordCharacters += special;
    }

    for (let i = 0; i < pwLength; i++) {
        const random = Math.floor(Math.random() * passwordCharacters.length);
        newPassword += passwordCharacters.substring(random, random+1);
    };

    formDiv.setAttribute('class', 'hidden');
    pwContainer.textContent = newPassword;
    pwDiv.setAttribute('class', 'card');
}

const handleClearForm = () => {
    clearForm();
    formDiv.setAttribute('class', 'card');
    pwDiv.setAttribute('class', 'hidden');
    
};


clearBtn.addEventListener('click', (event) => {
    event.preventDefault();
    handleClearForm();
});

generateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    handleGeneratePassword();
});

newGenBtn.addEventListener('click', (event) => {
    event.preventDefault();
    handleClearForm();
})
noLengthBtn.addEventListener('click', (event) => {
    event.preventDefault();
    noLengthModal.setAttribute('class', 'hidden');
});

noCharsBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    noCharsModal.setAttribute('class', 'hidden');
});
