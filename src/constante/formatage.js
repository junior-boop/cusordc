export default class FormatageTel {
    constructor() {
      this.value = '';
    }
  
    set setvalue(value) {
      this.value = value;
    }
  
    get setvalue() {
      let newValue = this.value.replace(/[^\d]/g, '').substring(0, 9);
      let groupe = [];
      for (let i = 0; i < newValue.length; i += 3) {
        groupe.push(newValue.substring(i, i + 3));
      }
  
       return groupe.join(' ')
    }
  
    init() {
      return (this.setvalue);
    }
  }