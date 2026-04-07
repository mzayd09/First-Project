document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');

  if (!loginForm) return;

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    if (!email || !password) {
      loginMessage.textContent = 'Please enter both email and password.';
      return;
    }

    loginMessage.textContent = 'Login successful! Redirecting to the home page...';
    loginMessage.style.color = '#2f7a57';
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1200);
  });
});
