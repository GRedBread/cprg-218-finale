const wrappers = document.querySelectorAll('.image-wrapper');
wrappers.forEach((wrapper) => {
  wrapper.addEventListener('mouseenter', () => {
    wrapper.style.setProperty('--glow', '1');
  });
  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.setProperty('--glow', '0');
  });
});

