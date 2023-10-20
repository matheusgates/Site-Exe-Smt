var options =  {
    onKeyPress: function(cep, e, field, options) {
      var mask = "(00) 00000-0000";
      $('.input-phone').mask(mask, options);
  }};
  
  $('.input-phone').mask('(00) 00000-0000', options);