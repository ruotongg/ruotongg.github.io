// Theme toggle event handler
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark');

      if (isDark) {
        html.classList.remove('dark');
        html.style.colorScheme = 'light';
        localStorage.setItem('wc-color-theme', 'light');
      } else {
        html.classList.add('dark');
        html.style.colorScheme = 'dark';
        localStorage.setItem('wc-color-theme', 'dark');
      }
    });
  }
});
