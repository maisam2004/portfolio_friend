function fadePageOut(event) {
  event.preventDefault(); // Prevent the default link behavior
  const target = event.target.href; // Get the target page URL

  // Add fade-out class to the body
  document.body.classList.add("fade-out");

  // After 1 second (when the fade-out animation finishes), navigate to the target page
  setTimeout(function () {
    window.location.href = target;
  }, 1000);
}
