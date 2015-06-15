Template.navBar.rendered = function(){
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
};

Template.navBar.events({
  "click a#lnkAyuda": function (event, template) {
    var fbHelpAccount = "http://www.facebook.com/jorge.ricaldi/";
    var spanText = "<span class='text-darken-1 yellow-text'>Cont&aacute;ctame @jricaldip</span>";
    Materialize.toast(spanText, 5000,'rounded')
  },

  // "click a#lnkColClaro" : function(event,template){
  //   Session.set("tituloPagina", "Colaboradores Claro");
  // }
});
