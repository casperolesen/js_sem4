function person(name, age) {
    let _name = name;
    let _age = age;
    return {
      setName: function(name) {
        _name = name;
      },
  
      setAge: function(age) {
        _age = age;
      },
  
      getInfo: function() {
        return `${_name}, ${_age}`;
      }
    }
  };
  
  module.exports = person;