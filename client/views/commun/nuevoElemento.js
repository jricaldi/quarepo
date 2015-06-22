Template.nuevoElemento.events({
  'click button#btnCrearNuevo': function () {
    Router.go(Session.get("rutaPagina") + CONSTANTE.new);
  }
});
