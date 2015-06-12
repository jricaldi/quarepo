Template.sideBar.rendered = function(){
  $('.collapsible').collapsible();
}

Template.sideBar.events({
  "click a#lnkColClaroSb" : function(event,template){
    Session.set("tituloPagina", "Colaboradores Claro");
  }
});
