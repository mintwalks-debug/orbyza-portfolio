// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = 'rgba(0,229,160,0.15)';
  btn.style.color = 'rgba(0,229,160,0.9)';
  btn.style.border = '1px solid rgba(0,229,160,0.3)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    btn.style.color = '';
    btn.style.border = '';
    e.target.reset();
  }, 3000);
}

// Stat counter animation
function animateCount(el, target, suffix) {
  let start = 0;
  const dur = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const prog = Math.min((timestamp - start) / dur, 1);
    const eased = 1 - Math.pow(1 - prog, 3);
    if (suffix === '+' || suffix === '') {
      el.textContent = Math.round(eased * target) + suffix;
    }
    if (prog < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const nums = e.target.querySelectorAll('.stat-num');
      nums.forEach(n => {
        if (n.textContent.includes('235')) animateCount(n, 235, '+');
        else if (n.textContent.includes('100')) animateCount(n, 100, '%');
        else if (n.textContent.includes('5')) animateCount(n, 5, '+');
      });
      statObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('#stats').forEach(el => statObs.observe(el));
