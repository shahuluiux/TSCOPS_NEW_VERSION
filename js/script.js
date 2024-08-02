// Date Picker Script Code Start

document.addEventListener('DOMContentLoaded', function () {
  flatpickr('#datepicker', {
    dateFormat: 'd-m-Y' // Customize the date format as needed
  });
  flatpickr('#fromdatepicker', {
    dateFormat: 'd-m-Y' // Customize the date format as needed
  });
  flatpickr('#todatepicker', {
    dateFormat: 'd-m-Y' // Customize the date format as needed
  });

  flatpickr('#dobdatepicker', {
    dateFormat: 'd-m-Y' // Customize the date format as needed
  });
});

// Date Picker Script Code End

// 
document.addEventListener('DOMContentLoaded', function () {
  const rowsPerPageSelect = document.getElementById('rowsPerPage');
  const tableBody = document.getElementById('tableBody');
  const paginationContainer = document.getElementById('paginationControls');
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  let currentPage = 1;

  function paginateTable(rows, rowsPerPage, pageNumber) {
    const start = (pageNumber - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    rows.forEach((row, index) => {
      row.style.display = index >= start && index < end ? '' : 'none';
    });
  }

  function updatePaginationControls() {
    const rowsPerPage = parseInt(rowsPerPageSelect.value, 10);
    const numPages = Math.ceil(rows.length / rowsPerPage);
    paginationContainer.innerHTML = '';

    // Previous Button
    const prevButton = document.createElement('li');
    prevButton.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevButton.innerHTML = `<span class="page-link">Previous</span>`;
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });
    paginationContainer.appendChild(prevButton);

    // Page Numbers
    const pageNumbers = Math.min(numPages, 5); // Show up to 5 page numbers
    const startPage = Math.max(1, currentPage - Math.floor(pageNumbers / 2));
    const endPage = Math.min(numPages, startPage + pageNumbers - 1);

    for (let i = startPage; i <= endPage; i++) {
      const pageItem = document.createElement('li');
      pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
      pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageItem.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = i;
        updatePagination();
      });
      paginationContainer.appendChild(pageItem);
    }

    // Next Button
    const nextButton = document.createElement('li');
    nextButton.className = `page-item ${currentPage === numPages ? 'disabled' : ''}`;
    nextButton.innerHTML = `<span class="page-link">Next</span>`;
    nextButton.addEventListener('click', () => {
      if (currentPage < numPages) {
        currentPage++;
        updatePagination();
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  function updatePagination() {
    const rowsPerPage = parseInt(rowsPerPageSelect.value, 10);
    paginateTable(rows, rowsPerPage, currentPage);
    updatePaginationControls();
  }

  // Event Listener for Rows Per Page Change
  rowsPerPageSelect.addEventListener('change', () => {
    currentPage = 1; // Reset to first page on filter change
    updatePagination();
  });

  // Initial Pagination Setup
  updatePagination();
});



