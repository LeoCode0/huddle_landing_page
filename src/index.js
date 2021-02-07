const BUTTON_FOOTER = document.querySelector(".form__button");
const INPUT = document.querySelector(".form__input");

const paragraph = document.createElement("p");

const checkInput = () => {
  if (!INPUT.value.includes("@")) {
    INPUT.parentElement.appendChild(paragraph);
    paragraph.textContent = "Check your email please";
    paragraph.classList.add("text", "text__red");
  } else {
    paragraph.textContent = "Email successfully registered";
    INPUT.parentElement.appendChild(paragraph);
    paragraph.classList.remove("text__red");
    paragraph.classList.add("text", "text__green");
    INPUT.value = "";
  }
};

INPUT.parentElement.onsubmit = (e) => {
  e.preventDefault();
  checkInput();
};
