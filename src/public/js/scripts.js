document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const createPlanForm = document.querySelector('.create-plan-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const username = this.querySelector('[name="username"]').value;
        const password = this.querySelector('[name="password"]').value;
  
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
          .then(response => response.json())
          .then(data => {
        if (data.success) {
          // Якщо авторизація успішна
          // Перенаправити користувача на сторінку createPlan.html
          window.location.href = '/createPlan.html';
        } else {
          // Якщо авторизація не вдалася
          console.error('Помилка авторизації:', data.error);
          // Відобразити повідомлення про помилку на сторінці
          const errorMessage = document.querySelector('.error-message');
          errorMessage.textContent = data.error;
          errorMessage.style.display = 'block';
        }
          })
          .catch(error => {
            console.error('Помилка авторизації:', error);
          });
      });
    }
  
    if (createPlanForm) {
      createPlanForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const title = this.querySelector('[name="title"]').value;
        const description = this.querySelector('[name="description"]').value;
        const userId = this.querySelector('[name="userId"]').value;
        const planType = this.querySelector('[name="planType"]').value; 
  
        fetch('/api/create-plan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description, userId, planType }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) { if (data.success) {
              // Якщо успішно створено план
              // Показати блок для відображення успіху
              const successMessage = document.querySelector('.success-message');
              successMessage.style.display = 'block';
        
              // Вивести деталі плану
              const planDetails = document.getElementById('planDetails');
              planDetails.textContent = `Title: ${data.plan.title}, Description: ${data.plan.description}, UserId: ${data.plan.userId}, PlanType: ${data.plan.planType}`;
            }
              const successMessage = document.querySelector('.success-message');
              successMessage.style.display = 'block';
              // Вивести деталі плану
              const planDetails = document.getElementById('planDetails');
              planDetails.textContent = `Title: ${data.plan.title}, Description: ${data.plan.description}, UserId: ${data.plan.userId}, PlanType: ${data.plan.planType}`;
            } else {
              // Якщо сталася помилка
              console.error('Помилка створення плану:', data.error);
            }
          })
          .catch(error => {
            console.error('Помилка створення плану:', error);
          });
      });
    }
  });