Template.colClaro.helpers({
  titulo: function(){
    return Session.get("tituloPagina");
  }
});

Template.colClaro.rendered = function(){
  $('.button-collapse').sideNav('hide');
}
