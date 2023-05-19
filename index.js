document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.querySelector('.search_bar');
    searchInput.addEventListener('focus', function() {
      this.placeholder = '';
    });
    searchInput.addEventListener('blur', function() {
      if (!this.value) {
        this.placeholder = 'What are you looking for?';
      }
    });
  });