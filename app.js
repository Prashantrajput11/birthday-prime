let userInfo = document.querySelector(".user-info");
let output = document.querySelector(".output-text");
let btn = document.querySelector(".btn-birthday");
// let container=document.querySelector("output-text-container");

btn.addEventListener("click", clickHandler);
function clickHandler() {
  // console.log(userInfo.value);

  var userDate = userInfo.value.split("/");
  // console.log(userDate[0]);
  // console.log(userDate[1]);
  // console.log(userDate[2]);

  // birthday is a prime number

  function checkPrime() {
    for (var i = 2; i < userDate[0]; i++) {
      if (userDate[0] % i == 0) {
        output.innerText = " Your birthdate is not a prime number 😊";
        console.log("not a prime number");
        return false;
      }
    }

    output.innerText = " your birthdate is a prime number 😎";
    console.log("is a prime number");
  }
  checkPrime();
}
