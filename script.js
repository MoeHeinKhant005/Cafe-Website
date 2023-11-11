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
