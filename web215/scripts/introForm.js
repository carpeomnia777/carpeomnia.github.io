
// Function to handle file input change

// Function to handle file input change
function handleFileInputChange(file) {
  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      const imagePreview = document.getElementById('imagePreview');
      imagePreview.style.display = 'block';
      imagePreview.querySelector('.image-preview__image').src = reader.result;
    };

    reader.readAsDataURL(file);
  }
}

// Function to handle drop event
function handleDrop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  handleFileInputChange(file);
}

// Function to handle form submission
function submitForm() {
  const picOf = document.getElementById('picOf').value;
  const name = document.getElementById('name').value;
  const about = document.getElementById('about').value;
  const work = document.getElementById('work').value;
  const academic = document.getElementById('academic').value;
  const platform = document.getElementById('platform').value;
  const courses = document.getElementById('courses').value;
  const interestingItem = document.getElementById('interestingItem').value;
  const peanutButter = document.getElementById('peanutButter').value;
  const pets = [...document.querySelectorAll('input[name=pets]:checked')].map(pet => pet.value);

  // Retrieve image data
  const imageSrc = document.getElementById('imagePreview').querySelector('.image-preview__image').src;

  // Redirect to another page with the collected data
  const formData = {
    picOf,
    name,
    about,
    work,
    academic,
    platform,
    courses,
    interestingItem,
    peanutButter,
    pets,
    imageSrc
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  window.location.href = 'form_result.html';
}

// Event listeners
document.getElementById('fileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  handleFileInputChange(file);
});

document.getElementById('dropZone').addEventListener('dragover', (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
});

document.getElementById('dropZone').addEventListener('drop', handleDrop);

// Hide image preview initially
document.getElementById('imagePreview').style.display = 'none';