document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const button = this.querySelector('button[type="submit"]');
  const oldText = button.textContent;

  button.disabled = true;
  button.textContent = 'Sending...';

  const data = {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    email: document.getElementById('email').value.trim(),
    service: document.getElementById('service').value.trim(),
    message: document.getElementById('message').value.trim()
  };

  try {
    const response = await fetch(
      'https://anns-enquiry-api.annshealthywealthycorporatesol.workers.dev/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Unable to send enquiry');
    }

    alert('Thank you! Your enquiry has been submitted successfully.');
    this.reset();

  } catch (error) {
    console.error(error);
    alert('Unable to submit enquiry. Please try again.');
  } finally {
    button.disabled = false;
    button.textContent = oldText;
  }
});
