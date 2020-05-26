document.addEventListener('DOMContentLoaded', function() {
  // Adds toggling ability to the page
  //
  // Elements with a data-toggle-sender attribute's will
  // trigger elements with a data-toggle-receiver attribute
  // to show or hide if they share the same attribute value.
  document
    .querySelector('.header')
    .addEventListener('click', handleToggle)
})
