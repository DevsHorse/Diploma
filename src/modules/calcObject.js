class CaclData {
  constructor() {
    this.type = document.querySelector('.checkbox-type').hasAttribute('checked');
    this.bottom = document.querySelector('.checkbox-three').hasAttribute('checked');
    this.diameter = document.querySelector('.diameter');
    this.diameter2 = document.querySelector('.diameter2');
    this.rings = document.querySelector('.number-of-rings');
    this.rings2 = document.querySelector('.number-of-rings2');
    this.distance = document.querySelector('.distance-to-home').value;
    this.price = document.getElementById('calc-result').value;
    this.data = {};
  }
  init() {
    
    //Formation part data object of calculate block 
    this.type = this.type === true ? 'Однокамерный' : 'Двухкамерный';
    this.bottom = this.bottom === true ? 'есть' : 'нет';

    this.data['Тип'] = this.type;

    this.data['Приемный'] = {
        'Диаметр': this.diameter.value,
        'Кольца': this.rings.value
    };
  
    if (this.type === 'Двухкамерный') {
      this.data['Дренажный'] = {
        'Диаметр': this.diameter2.value,
        'Кольца': this.rings2.value
      };
    }

    this.data['Днище'] = this.bottom;
    this.data['Расстояние до дома'] = this.distance;
    this.data['Примерная сумма'] = this.price;
    return this.data;
  }
}

export default CaclData;