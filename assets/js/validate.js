const emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
  let inputBox = document.getElementById("inputBox");

  if (emailInput.value.match(emailPattern)) {
    inputBox.classList.add("valid");
    inputBox.classList.remove("invalid");
    emailInput.classList.add("bgValid");
    emailInput.classList.remove("bgWrong");
  }else if(emailInput.value === ''){
    inputBox.classList.remove("invalid");
    inputBox.classList.remove("valid");
    emailInput.classList.remove("bgValid");
    emailInput.classList.remove("bgWrong");
  }
  else{
    inputBox.classList.add("invalid");
    inputBox.classList.remove("valid");
    emailInput.classList.add("bgWrong");
    emailInput.classList.remove("bgValid");
  }
});
