document.addEventListener('DOMContentLoaded', function() {
  
    const createPlanForm = document.querySelector('.create-plan-form');

    if (createPlanForm) {
      createPlanForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const title = this.querySelector('[name="title"]').value;
        const description = this.querySelector('[name="description"]').value;
        const userId = this.querySelector('[name="userId"]').value;
        const planType = this.querySelector('[name="planType"]').value; 
  
        // Викликати API для створення плану тут
      });
    }
  });