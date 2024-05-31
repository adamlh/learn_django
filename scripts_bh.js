document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://www.gov.uk/bank-holidays.json';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const holidays = data['england-and-wales'].events;
        renderTable(holidays);
        populateYearFilter(holidays);
      })
      .catch(error => console.error('Error fetching data:', error));
  
    const yearFilter = document.getElementById('year-filter');
    yearFilter.addEventListener('change', function() {
      const selectedYear = yearFilter.value;
      filterTableByYear(selectedYear);
    });
  
    function renderTable(holidays) {
      const tableBody = document.querySelector('#holidays-table tbody');
      tableBody.innerHTML = '';
  
      holidays.forEach(holiday => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${holiday.title}</td>
          <td>${holiday.date}</td>
          <td>${holiday.notes}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    function populateYearFilter(holidays) {
      const years = [...new Set(holidays.map(holiday => holiday.date.split('-')[0]))];
      const yearFilter = document.getElementById('year-filter');
  
      years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
      });
    }
  
    function filterTableByYear(year) {
      const apiUrl = 'https://www.gov.uk/bank-holidays.json';
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const holidays = data['england-and-wales'].events;
          const filteredHolidays = year === 'all' ? holidays : holidays.filter(holiday => holiday.date.startsWith(year));
          renderTable(filteredHolidays);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  });
  