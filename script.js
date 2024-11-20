const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", function () {
  const htmlElement = document.documentElement;

  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggleButton.textContent = "Toggle Dark Mode";
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggleButton.textContent = "Toggle Light Mode";
  }
});

// Persist theme and button text between page reloads
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    themeToggleButton.textContent = "Toggle Light Mode";
  } else {
    themeToggleButton.textContent = "Toggle Dark Mode";
  }
});

document.getElementById("calculateButton").addEventListener("click", function () {
  const courseName = document.getElementById("courseName").value;
  const mp1 = parseFloat(document.getElementById("mp1").value);
  const mp2 = parseFloat(document.getElementById("mp2").value);
  const finalExam = parseFloat(document.getElementById("finalExam").value);

  if (isNaN(mp1) || isNaN(mp2) || isNaN(finalExam)) {
    document.getElementById("result").textContent = "Please enter valid numbers for all scores.";
    return;
  }

  const mpAverage = (mp1 + mp2) / 2;
  const finalGrade = (mpAverage * 0.84) + (finalExam * 0.16);

  document.getElementById("result").textContent = `Your final grade for ${courseName} is: ${finalGrade.toFixed(2)}`;
});
