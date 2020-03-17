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

  const postAjax = data => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(data)
    });
  };


  const ajaxResponse = () => {
    forms.forEach(form => {
      
      const validateInputs = new Validate(form);
      validateInputs.init();

      form.addEventListener('submit', event => {
        event.preventDefault();
        const formInputs = form.querySelectorAll('input');
        form.insertAdjacentElement('beforeend', messageContainer);

        if (validateInputs.submitValidate() !== true) {
          return;
        }

        const bundleData = () => {
          let data = {};
          formInputs.forEach(input => {
            data[input.id.match(/^[a-z]*/)] = input.value;
          });

          for (let key of Object.keys(innerData)) {
            data[key] = innerData[key];
          }

          console.log(data);
          return data;
        };

        messageContainer.innerHTML = loadingMessage;

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

        //testResponse для тестов, потом его не будет
        const testResponse = () => {
          postAjax(bundleData())
          .then(response => {
            if (response.status !== 200) {
              throw setErrorMessage;
            }
            setSuccessMesage();
          })
          .catch(error => error())
          .finally(() => clearBlocks);
        };
        
        setTimeout(testResponse, 1000);
        
      })
    });
  };
  ajaxResponse();
};

export default ajax;