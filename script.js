// selected all html id
const input = document.getElementById("input-password");
const submitBtn = document.getElementById("submit-btn");
const massage = document.getElementById("massage");
const strength = document.getElementById("strength");

// window.onload
window.onload = function () {
  mainFunction();
};

// mainFunction function
function mainFunction() {
  submitBtn.addEventListener("click", function () {
    if (input.value === "") {
      alert("Please type password!");
    } else {
      inputBtnFun();
      input.value = "";
      massage.style.display = "none";
      input.style.borderColor = "#ffffff";
      massage.style.color = "none";
    }
  });

  //   input addEventListener
  input.addEventListener("input", inputBtnFun);
}

// inputBtnFun function
function inputBtnFun() {
  if (input.value.length > 0) {
    massage.style.display = "block";
  } else {
    massage.style.display = "none";
  }

  if (input.value.length < 4) {
    strength.innerHTML = "Weak";
    input.style.borderColor = "red";
    massage.style.color = "red";
  } else if (input.value.length >= 4 && input.value.length < 8) {
    strength.innerHTML = "Medium";
    input.style.borderColor = "yellow";
    massage.style.color = "yellow";
  } else if (input.value.length >= 8) {
    strength.innerHTML = "Strong";
    input.style.borderColor = "#059862";
    massage.style.color = "#059862";
  }
}
