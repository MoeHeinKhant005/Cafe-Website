const hamburgerBtn = document.querySelector('.rightMenuBtn');
const sidebar = document.querySelector('.sideBar');
const closeBtn = document.querySelector('.closeBtn');

// Mobile Sidebar Navigation
let isExpanded = false;
hamburgerBtn.addEventListener('click', e => {
  if(isExpanded == false){
    sidebar.style.transform = "translateX(0%)";
    isExpanded = true;
  }
})

closeBtn.addEventListener('click', e => {
  if(isExpanded == true){
    sidebar.style.transform = "translateX(100%)";
    isExpanded = false;
  }
})

// Function to close sidebar whenever a navItem is clicked
const mobileNavItems = document.querySelectorAll('.sideBar .navItem');
mobileNavItems.forEach(item => {
  item.addEventListener('click', e => {
    sidebar.style.transform = "translateX(100%)";
    isExpanded = false;
  })
})

// Function to scroll to contactSec when orderBtn is clicked
const orderBtn = document.querySelectorAll('.orderBtn');
orderBtn.forEach(item => {
  item.addEventListener('click', e => {
    sidebar.style.transform = "translateX(100%)";
    isExpanded = false;
    document.querySelector('.contactSec').scrollIntoView();
  })
})

// Function to scroll to menuSec when viewMenuBtn is clicked  
const viewMenuBtn = document.querySelector('.viewMenuBtn');
viewMenuBtn.addEventListener('click', e => {
  document.querySelector('.menuSec').scrollIntoView();
})
