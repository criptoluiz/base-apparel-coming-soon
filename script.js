const email = document.getElementById("email");
const form = document.getElementById("form");
const perror = document.getElementById("perror");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = email.value;
  
    if (!isValid(emailValue)) {
        email.classList.replace("no-error", "error");
        perror.classList.replace("p-ok", "p-error");
    } else {
        email.classList.replace("error", "no-error");
        perror.classList.replace("p-error", "p-ok");
    }
  });
  
  function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }