const mainNav = document.getElementById("mainNav");
const mobileNavMenu = document.getElementById("mobileNav");
const closeBtn = document.querySelector('.closebtn');
const tabGroup = document.querySelector('.tab-group');
const tab = document.querySelectorAll('.tab');
console.log(tab);


// Click to open the navigation in mobile view
mainNav.addEventListener('click', e => {
  const hamburgerMenu = document.querySelector('span i');
  if (e.target === hamburgerMenu) {
    if(mobileNavMenu.style.width = "0%") {
      mobileNavMenu.style.width = "100%";
    }
  }
});

// close navigation in mobile view
closeBtn.addEventListener('click', ()=> {
  mobileNavMenu.style.width = "0%";
});

// tab functionality
tab.forEach(tab => tab.addEventListener("click", () => {
  tabContent = tab.lastElementChild;
  if (tabContent.className === 'tab-content') {
    tabContent.className ='tab-clicked';
  } else if (tabContent.className === 'tab-clicked') {
    tabContent.className = 'tab-content';
  }
}))

// run the baguetteBox gallery
baguetteBox.run('.photo-gallery');

