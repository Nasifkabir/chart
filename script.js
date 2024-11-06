// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  // Handle "Continue" and "Back" buttons
  document.getElementById("back").addEventListener("click", () => {
    swiper.slidePrev();
  });
  
  document.getElementById("continue").addEventListener("click", () => {
    swiper.slideNext();
  });
  
  // Create Earnings Chart (Line Chart)
  const earningsCtx = document.getElementById('earningsChart').getContext('2d');
  const earningsChart = new Chart(earningsCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Total Earnings',
        data: [120000, 150000, 170000, 160000, 180000, 200000],
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        borderColor: '#3f51b5',
        borderWidth: 2,
        fill: true,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  
  // Create Sales Chart (Bar Chart)
  const salesCtx = document.getElementById('salesChart').getContext('2d');
  const salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Sales',
        data: [25000, 30000, 35000, 33000, 38000, 40000],
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  
  // Create Revenue Distribution Chart (Pie Chart)
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  const revenueChart = new Chart(revenueCtx, {
    type: 'pie',
    data: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [{
        label: 'Revenue Distribution',
        data: [40, 30, 20, 10],
        backgroundColor: ['#3f51b5', '#f44336', '#4caf50', '#ff9800'],
        borderColor: '#ffffff',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });
  