/*Only one check box can be selected */
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.Checkoption');
  
    function handleCheckboxChange(event) {
      checkboxes.forEach((checkbox) => {
        if (checkbox !== event.target) {
          checkbox.checked = false;
        }
      });
    }
  
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', handleCheckboxChange);
    });
  });
  