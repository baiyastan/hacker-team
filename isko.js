const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

function showError(input, message) {
    let formControl = input.parentElement;
    formControl.className = "form-control error"
    let small = formControl.querySelector("small")
    console.log(message)
    small.innerHTML = message
}

function showSucces(input) {

    let formControl = input.parentElement;
    formControl.className = "form-control success"
  

}

function getFieldName(input) {
    console.log(input)
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputs){
    inputs.forEach((input) => {
        if(input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSucces(input);
        }
    })
}

function checkLength (input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} кеминде ${min} , белгиден туруш керек`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} ${max} белгиден аз болуш керек`);
    } else {
        showSucces(input);
    }
}

function checkPassword(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, `${getFieldName(input2)} сыр соз дал келбеди`)
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(email, 12, 30);
    checkLength(password, 6, 25);
    checkPassword(password, password2);
});



function togglePassword(toggleBtn) {
    if(password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "👁";
    } else {
        password.type = "password";
        toggleBtn.textContent = "🔒";
    }
}

function togglePassword2(toggleBtn) {
    if(password.type === "password2") {
        password2.type = "text";
        toggleBtn.textContent = "👁";
    } else {
        password.type = "password2";
        toggleBtn.textContent = "🔒";
    }
}

let word = "wrapperer"; // {w:1, r: 3, a: 1, p:2, e:2}
function checkWord(text) {
    let obj = {};
    for(let char of text) {
    if(obj[char]){
        obj[char]++;
    }else {
        obj[char] = 1;
    }
    }
}

let a = checkWord(word)
console.log(a);

// level = true
// 121 = true
// hello = false
// palindrom

function isPalonfrom(word) {
    const reversedText = word.split("").reverse().join("");

    return reversedText === word
}


let x = isPalindrom("level");

console.log(x);