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

