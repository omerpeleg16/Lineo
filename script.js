// Lineo Landing Page Interactive Behaviors
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Interactive Kit Explorer Tab Switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update Active Tab Button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Active Tab Content
      tabContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });

  // 3. Dropzone Hover & Simulated Drag Interactivity
  const dropzone = document.getElementById('dropzone');
  if (dropzone) {
    dropzone.addEventListener('mouseenter', () => {
      dropzone.style.borderColor = 'rgba(167, 139, 250, 0.7)';
      dropzone.style.background = 'rgba(124, 58, 237, 0.08)';
    });

    dropzone.addEventListener('mouseleave', () => {
      dropzone.style.borderColor = 'rgba(167, 139, 250, 0.3)';
      dropzone.style.background = 'rgba(255, 255, 255, 0.03)';
    });
  }

  // 4. CTA Form Submit Simulator
  const ctaForm = document.getElementById('cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = ctaForm.querySelector('input[type="email"]');
      const submitBtn = ctaForm.querySelector('button');

      if (input && input.value.trim() !== '') {
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Creating Account...';

        setTimeout(() => {
          submitBtn.innerText = '✨ Access Granted!';
          submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
          input.value = '';
          
          setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
          }, 3000);
        }, 1200);
      }
    });
  }

  // 5. Mobile Toggle Placeholder
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#0B0F17';
      navLinks.style.padding = '20px';
      navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    });
  }
});
