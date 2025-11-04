// JS scripts placed here
const button = document.getElementById("clickBtn");
const stick = document.getElementById("stick");

button.addEventListener("click", () => {
  button.style.display = "none"; // Hide button
  stick.classList.add("fly"); // Animate stick figure

  // Redirect after animation ends
  setTimeout(() => {
    window.location.href = "next.html"; // Change this to your destination
  }, 2000);
});
