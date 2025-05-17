// AOS animation
AOS.init({
  once: true
});

// work with form
const form = document.querySelector('.js-form');
const submitButton = document.getElementById('submitBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.innerText = 'ОТПРАВКА...';

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwfwfhfkDRBlH9AR_ty1unWrK2KlQEH_x5j3QOPcFLBLzNpAJK8baVUzz9wTyNiAbSb/exec';

  const dataTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  document.querySelector('.js-form-date').value = dataTime;

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      console.log('Success!', response);
      submitButton.disabled = false;
      submitButton.innerText = 'ОТПРАВИТЬ';
      window.location.href = 'https://t.me/+p606pNQ9Jkw1ZmQy';
      form.reset();
    })
    .catch((error) => {
      console.error('Error!', error.message);
    });
});
