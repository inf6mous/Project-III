document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("launchBtn");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const reset = document.getElementById("resetBtn");

  button.addEventListener("click", () => {
    button.disabled = true;
    document.body.classList.add("launching");

    // Reveal content after animation
    setTimeout(() => {
      page2.querySelector(".content").style.opacity = "1";
    }, 2000);
  });

  reset.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("launching");
    page2.querySelector(".content").style.opacity = "0";
    button.disabled = false;
  });
});
