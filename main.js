
  // Obtener elementos relevantes del DOM
  const minusBtn = document.querySelector('.minus');
  const plusBtn = document.querySelector('.plus');
  const numElement = document.querySelector('.num');
  
  // Manejar el evento de clic en el botón "-"
  minusBtn.addEventListener('click', function() {
    let currentNum = parseInt(numElement.textContent);
    if (currentNum > 1) {
      currentNum--;
      numElement.textContent = currentNum;
    }
  });
  
  // Manejar el evento de clic en el botón "+"
  plusBtn.addEventListener('click', function() {
    let currentNum = parseInt(numElement.textContent);
    currentNum++;
    numElement.textContent = currentNum;
  });
  
  // Enviar el formulario por correo electrónico
  function submitForm() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const quantity = parseInt(numElement.textContent);
    
    const subject = 'Nuevo pedido';
    const nextURL = 'https://pandeyuca.vercel.app/thanks.html';
    
    const emailBody = `
      Name: ${name}
      Phone number: ${number}
      Quantity: ${quantity}
    `;
    
    const form = document.getElementById('msform');
    form.setAttribute('action', 'https://formsubmit.co/moncayomichael23@gmail.com');
    form.setAttribute('method', 'POST');
    form.insertAdjacentHTML('beforeend', `<input type="hidden" name="_subject" value="${subject}">`);
    form.insertAdjacentHTML('beforeend', `<input type="hidden" name="_next" value="${nextURL}">`);
    form.insertAdjacentHTML('beforeend', `<input type="hidden" name="emailBody" value="${emailBody}">`);
    
    form.submit();
  }