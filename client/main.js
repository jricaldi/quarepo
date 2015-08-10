Template.mainLayout.helpers({
  titulo: function(){
    return Session.get("tituloPagina");
  },
  esError : function(){
    if (Session.equals("status", CONSTANTE.error))
      return "red-text borderError";
    return "teal-text";
  },
  mensaje : function(){
    return Session.get("mensaje");
  },
  hideIcon : function(){
    if (Session.equals("status", undefined))
      return "esconder"
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
