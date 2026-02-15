
// button ripple effect
document.querySelectorAll(".btn-custom").forEach(button => {
  button.addEventListener("click", function (e) {

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

  });
});

// header scroll effect
const header = document.querySelector(".header-custom");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



// newsletter email validation
document.getElementById("newsletterForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if(email.includes("@")) {
        message.innerHTML = "<span class='text-success'>Thank you for subscribing!</span>";
        this.reset();
    } else {
        message.innerHTML = "<span class='text-danger'>Please enter a valid email.</span>";
    }
});


