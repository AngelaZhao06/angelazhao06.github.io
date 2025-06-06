document.addEventListener("DOMContentLoaded", function() {
  const passport = document.getElementById("passport");
  passport.addEventListener("click", function() {
    passport.classList.toggle("open");
  });
});