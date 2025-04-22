// Make each chapter collapsible when the header is clicked
document.querySelectorAll('.chapter-header').forEach(header => {
  header.addEventListener('click', () => {
    header.parentElement.classList.toggle('open');
  });
});

// Sidebar navigation: Scroll to the chapter and open it when clicked
document.querySelectorAll('#chapterList li').forEach(item => {
  item.addEventListener('click', () => {
    var target = document.getElementById(item.getAttribute('data-target'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      target.classList.add('open');
    }
  });
});

// Save checklist progress in localStorage so that user progress persists between visits
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  // Load saved state
  const saved = localStorage.getItem(checkbox.id);
  if (saved === "true") {
    checkbox.checked = true;
  }
  // Save state on change
  checkbox.addEventListener('change', () => {
    localStorage.setItem(checkbox.id, checkbox.checked);
  });
});
