// "use strict";

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("sub-title-content");
function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ---------submit------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzStWhZOCeDFPb4Fe2INwCejcBsgkBcGjiAZKSnnNQrq0EKPWZu0WO40HZ6gVu0GdUWHQ/exec";
const form = document.forms["submit-to-google-sheet"];
const submitTxt = document.querySelector(".submitTxt");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      submitTxt.innerHTML = "Submitted successfully!";
      setTimeout(() => {
        submitTxt.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// -----------------------------
// const submitBtn = document.querySelector(".submitBtn");
// submitBtn.addEventListener("click", () => {
//   submitTxt.innerHTML = "You have successfully submited";
// });

const closeMenue = document.querySelector(".cancel");
const navigation = document.querySelector("nav");
const menueTab = document.querySelector(".menueTab");
menueTab.addEventListener("click", () => {
  navigation.classList.add("show");
  menueTab.style.display = "none";
});
closeMenue.addEventListener("click", () => {
  navigation.classList.remove("show");
  menueTab.style.display = "block";
});
