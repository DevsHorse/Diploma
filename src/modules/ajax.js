import Validate from './validate';

const ajax = (innerData = {}) => {
 
  const forms = document.querySelectorAll('.form'),
   messageContainer = document.createElement('div'),
   successMessage = 'Спасибо! Мы скоро с вами свяжемся.',
   errorMessage = 'Ошибка отправки!',
   loadingMessage = 'Загрузка...';

   messageContainer.style.cssText = `
        font-size: 18px;
        font-weight: 700;
        `;

  //Ajax post      
  const postAjax = data => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  //Ajax response function
  const ajaxResponse = () => {
    forms.forEach(form => {

      //Set validation to all forms
      const validateInputs = new Validate(form);
      validateInputs.init();

      form.addEventListener('submit', event => {
        event.preventDefault();

        const formInputs = form.querySelectorAll('input');
        form.insertAdjacentElement('beforeend', messageContainer);

        //Set validate to submit event
        if (validateInputs.submitValidate() !== true) {
          return;
        }

        //Function join parts of data to one object
        const bundleData = () => {
          let data = {};
          formInputs.forEach(input => {
            data[input.id.match(/^[a-z]*/)] = input.value;
          });

          for (let key of Object.keys(innerData)) {
            data[key] = innerData[key];
          }
          return data;
        };

        messageContainer.innerHTML = loadingMessage;

        //Clear status message after submit
        const clearBlocks = setTimeout(() => {
          messageContainer.innerHTML = '';
          formInputs.forEach(item => item.value = '');
        }, 3000); 

        const setSuccessMesage = () => {
            messageContainer.innerHTML = successMessage;
        };

        const setErrorMessage = () => {
          messageContainer.innerHTML = errorMessage;
        };

        //Ajax response handler
        postAjax(bundleData())
        .then(response => {
          if (response.status !== 200) {
            throw setErrorMessage;
          }
          setSuccessMesage();
        })
        .catch(error => error())
        .finally(() => clearBlocks);

      });
    });
  };
  ajaxResponse();
};

export default ajax;