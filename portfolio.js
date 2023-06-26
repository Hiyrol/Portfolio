// portfolio.js file
const tabs = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    tabContents.forEach((content) =>
      content.classList.remove("active-tab")
    );
    tabContents[index].classList.add("active-tab");
  });
});

const sideMenu = document.getElementById("sidemenu");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-circle-xmark");

openMenu.addEventListener('click', () => {
  sideMenu.classList.add('open');
  sideMenu.style.right = "0";
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  sideMenu.style.right = "-200px";
});


