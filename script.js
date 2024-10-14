const unitOptions = document.querySelectorAll('.unit-option');
const dropdowns = document.querySelectorAll('.dropdown-container');

function hideAllDropdowns() {
  dropdowns.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });
}

function removeActiveClass() {
  unitOptions.forEach((option) => {
    option.classList.remove('active');
  });
}

function showDropdown(index) {
  hideAllDropdowns(); 
  dropdowns[index].style.display = 'block'; 
}

unitOptions.forEach((option, index) => {
  option.querySelector('input[type="radio"]').addEventListener('click', () => {
    removeActiveClass(); 
    option.classList.add('active'); 
    showDropdown(index); 
  });
});

hideAllDropdowns();
dropdowns[1].style.display = 'block';
unitOptions[1].classList.add('active');
