// Date Picker Script Code Start

document.addEventListener('DOMContentLoaded', function () {
  const datePickers = document.querySelectorAll('.datepicker');

  datePickers.forEach(picker => {
    flatpickr(picker, {
      dateFormat: 'd-m-Y' // Customize the date format as needed
    });
  });
});

// Date Picker Script Code End
