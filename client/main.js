Template.mainLayout.helpers({
  titulo: function(){
    return Session.get("tituloPagina");
  }
  // show: function(){
  //   if (!Session.equals("rutaPagina", "home")){
  //     Session.set("noDatos", "");
  //   }
  //   return Session.get("noDatos");
  // }
});

// Template.mainLayout.events({
//   "click button.modal-trigger": function(event, template){
//     $('div#crearNuevo').openModal();
//   }
// });

Template.mainLayout.onRendered(function(){
  $(".collapsible").collapsible();
  $(".dropdown-button").dropdown();

});
