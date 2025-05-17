document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      // Clear previous status messages
      if (formStatus) {
        formStatus.textContent = '';
        formStatus.className = '';
      }

      // Get form data
      const formData = {
        name: contactForm.querySelector('#name').value,
        email: contactForm.querySelector('#email').value,
        message: contactForm.querySelector('#message').value
      };

      try {
        // Send form data to backend
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        // Display success or error message
        if (response.ok && result.success) {
          if (formStatus) {
            formStatus.textContent = result.message;
            formStatus.className = 'success-message';
          }
          // Reset form on success
          contactForm.reset();

          // Scroll to the form status message
          formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          if (formStatus) {
            formStatus.textContent = result.message || 'Something went wrong. Please try again.';
            formStatus.className = 'error-message';
          }
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        if (formStatus) {
          formStatus.textContent = 'Failed to connect to the server. Please try again later. Make sure the server is running.';
          formStatus.className = 'error-message';
        }
      } finally {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }
});
