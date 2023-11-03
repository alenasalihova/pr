document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const createPlanForm = document.querySelector('.create-plan-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const username = this.querySelector('[name="username"]').value;
        const password = this.querySelector('[name="password"]').value;
  
        // Викликати API для авторизації тут
      });
    }
  
    if (createPlanForm) {
      createPlanForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const title = this.querySelector('[name="title"]').value;
        const description = this.querySelector('[name="description"]').value;
        const userId = this.querySelector('[name="userId"]').value;
        const planType = this.querySelector('[name="planType"]').value; // Отримання planType
  
        // Викликати API для створення плану тут
      });
    }
  });