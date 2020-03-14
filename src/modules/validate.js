class Validate {
  constructor(form) {
    this.form = form;
    this.inputs = this.form.querySelectorAll('input');
    this.patterns = [
      ["name", /^[а-яА-ЯёЁ]*$/ ],
      ["phone", /^\+?\d*$/ ],
      ["question", /^[а-яА-ЯёЁ0-9\?-\s]*$/ ]
    ];
  }
  init() {
    let arr = [];
    let count = 0;

    this.inputs.forEach(item => {
       arr.push(this.checkInputs(item));
    });

    arr.forEach(item => {
      if (item === false) {
        count++;
      } 
    });

    count === 0 ? count = true : count = false;
    return count;
  }
  checkInputs(input) {
    let isValid = false;
    this.patterns.forEach(pattern => {
      if (pattern[0] === input.id.match(/^[a-z]*/g)[0]) {
        isValid = pattern[1].test(input.value);
      }
    });
    return isValid;
  }
}

export default Validate;