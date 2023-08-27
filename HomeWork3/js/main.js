const inputName = document.querySelector(".name-input");
const nameButton = document.querySelector(".name-button");
const userName = document.querySelector(".name-user");

nameButton.addEventListener("click", function () {
  if (inputName.value === "") {
    inputName.style.borderColor = "red";
    alert("Вы не ввели имя!");
  } else {
    inputName.style.borderColor = "green";
    userName.textContent = inputName.value;
  }
});

const chatNameInput = document.querySelector(".chat-name-input");
const chatTxtInput = document.querySelector(".chat-txt-input");
const chatSms = document.querySelector(".chat-output");
const chatBtnSubmit = document.querySelector(".chat-submit");

chatBtnSubmit.addEventListener("click", function () {
  fieldValidation(chatNameInput, chatTxtInput);
  if (chatTxtInput.value !== "" && chatNameInput.value !== "") {
    let spanSms = document.createElement("span");
    spanSms.textContent = `${chatNameInput.value}: ${chatTxtInput.value}`;
    console.log(spanSms.textContent);
    chatSms.appendChild(spanSms);
  }
});
const massaCount = document.querySelector(".massa-count");
const massaHeight = document.querySelector(".massa-height");
const massaIndex = document.querySelector(".massa-index");
const massaOut = document.querySelector(".massa-out");
const massaBtn = document.querySelector(".massa-submit");

massaBtn.addEventListener("click", function () {
  let massaIndexBody;
  fieldValidation(massaCount, massaHeight);
  if (massaHeight.value !== "" && massaCount.value !== "") {
    massaIndexBody = (massaCount.value / (massaHeight.value / 100)).toFixed(1);
    bodyMassIndex(massaIndexBody);
  }
});

function bodyMassIndex(mass) {
  massaIndex.textContent = mass;
  if (mass <= 18.5) {
    massaOut.textContent = "Недостаточная";
  }
  if (mass > 18.5 && mass <= 24.9) {
    massaOut.textContent = "Нормальная";
  }
  if (mass >= 25.0 && mass <= 29.9) {
    massaOut.textContent = "Избыточная";
  }
  if (mass >= 30.0 && mass <= 34.9) {
    massaOut.textContent = "Ожирение первой степени";
  }
  if (mass >= 35.0 && mass <= 39.9) {
    massaOut.textContent = "Ожирение второй степени";
  }
  if (mass >= 40.0) {
    massaOut.textContent = "Ожирение третьей степени";
  }
}

function fieldValidation(input1, input2) {
  if (input1.value === "") {
    input1.style.borderColor = "red";
  } else {
    input1.style.borderColor = "green";
  }
  if (input2.value === "") {
    input2.style.borderColor = "red";
  } else {
    input2.style.borderColor = "green";
  }
  if (input1.value === "" && input2.value === "") {
    alert("Поля пустые!");
  }
}
