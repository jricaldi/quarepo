Template.colClaroList.helpers({
  titulo: function(){
    return Session.get("tituloPagina");
  }
});

Template.colClaroList.rendered = function(){
  $('.button-collapse').sideNav('hide');
}
