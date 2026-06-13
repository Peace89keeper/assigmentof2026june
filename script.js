// Logic: Grab the elements we need to interact with
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Function to toggle the drawer state
function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Attach the function to clicks
openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Logic: Allow clicking the tinted glass to close the drawer
overlay.addEventListener('click', toggleMenu);