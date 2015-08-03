Template.colClaroNew.events({
  "keypress #txtCelular": function(e,t){
    return helpOnlyNumbers(e);
  },
  "click #submit": function(e,t){
    e.preventDefault();
    var colClaro = {};
    colClaro.nombre = t.$("#txtNombre").val();
    colClaro.rol = t.$("#txtRol").val();
    colClaro.celular = t.$("#txtCelular").val();
    colClaro.email = t.$("#txtEmail").val();
    colClaro.empresa = t.$("#txtEmpresa").val();
    colClaro.tipo = CONSTANTE.claro;
    Meteor.call("insertarColClaro",colClaro,function(error,result){
      if (error)
        helpSetStatusMsg(CONSTANTE.error,MENSAJES.insertarColClaro_ERROR);
      else
        helpSetStatusMsg(CONSTANTE.ok,MENSAJES.insertarColClaro_OK);
        Router.go(Session.get("rutaPagina").split(".").shift());
    });
  }
});

Template.colClaroNew.onRendered(function(){
  // console.log($(window).width());
  // console.log($(document).width());
});

// Template.myTemplate.helpers({
//   response: function () {
//     return Session.get("response");
//   }
// });
