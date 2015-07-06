Template.colClaroNew.events({
  "keypress #txtCelular": function(event, template){
    return helpOnlyNumbers(event);
  }
});

Template.colClaroNew.onRendered(function(){
  console.log($(window).width());
  console.log($(document).width());
});
