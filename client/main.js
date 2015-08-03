Template.mainLayout.helpers({
  titulo: function(){
    return Session.get("tituloPagina");
  },
  esError : function(){
    if (Session.equals("status", undefined))
      return "hide"
    if (Session.equals("status", CONSTANTE.error))
      return "red-text";
    return "teal-text";
  },
  mensaje : function(){
    return Session.get("mensaje");
  }
});

Template.mainLayout.events({
  "click #btnShowPerfil": function(event, template){
    Router.go(CONSTANTE.perfil);
  }
});

Template.mainLayout.onRendered(function(){
  $(".collapsible").collapsible();
  $(".dropdown-button").dropdown();

});
