/**
 * GRUNER RENEWABLE - CONTACT FORM
 * Form validation and submission
 */

(function() {
  'use strict';

  // Validation rules
  const validators = {
    required: (value) => value.trim().length > 0,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: (value) => value.length === 0 || value.length >= 10,
    minLength: (value, min) => value.trim().length >= min,
    maxLength: (value, max) => value.trim().length <= max
  };

  // Error messages
  const messages = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    minLength: 'Must be at least {min} characters',
    maxLength: 'Must be less than {max} characters'
  };

  function init() {
    const forms = document.querySelectorAll('[data-contact-form]');
    
    forms.forEach(form => {
      form.addEventListener('submit', handleSubmit);
      
      // Real-time validation on blur
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearError(input));
      });
    });
  }

  function validateField(field) {
    const rules = field.dataset.validate ? field.dataset.validate.split(' ') : [];
    const value = field.value;
    let isValid = true;
    let errorMessage = '';

    for (const rule of rules) {
      if (rule === 'required' && !validators.required(value)) {
        isValid = false;
        errorMessage = messages.required;
        break;
      }
      
      if (rule === 'email' && value && !validators.email(value)) {
        isValid = false;
        errorMessage = messages.email;
        break;
      }
      
      if (rule === 'phone' && value && !validators.phone(value)) {
        isValid = false;
        errorMessage = messages.phone;
        break;
      }
      
      if (rule.startsWith('minLength:')) {
        const min = parseInt(rule.split(':')[1], 10);
        if (!validators.minLength(value, min)) {
          isValid = false;
          errorMessage = messages.minLength.replace('{min}', min);
          break;
        }
      }
    }

    if (!isValid) {
      showError(field, errorMessage);
    } else {
      clearError(field);
    }

    return isValid;
  }

  function showError(field, message) {
    clearError(field);
    
    field.classList.add('error');
    
    const errorEl = document.createElement('p');
    errorEl.className = 'form-error';
    errorEl.textContent = message;
    
    field.parentNode.appendChild(errorEl);
  }

  function clearError(field) {
    field.classList.remove('error');
    
    const errorEl = field.parentNode.querySelector('.form-error');
    if (errorEl) {
      errorEl.remove();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const fields = form.querySelectorAll('input, textarea');
    let isValid = true;

    // Validate all fields
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) return;

    // Show loading state
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="animate-spin">⏳</span> Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      // Show success message
      showSuccess(form);
      
      // Reset form
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  }

  function showSuccess(form) {
    const successEl = document.createElement('div');
    successEl.className = 'form-success';
    successEl.innerHTML = `
      <div class="form-success-icon">✓</div>
      <h3>Thank You!</h3>
      <p>We've received your message and will get back to you soon.</p>
    `;
    
    form.innerHTML = '';
    form.appendChild(successEl);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GrunerForm = { init, validateField };
})();
