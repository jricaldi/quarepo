Template.colClaroNew.events({
  "keypress #txtCelular" : function(e,t){
    return helpOnlyNumbers(e);
  },
  "submit" : function(e,t){
    e.preventDefault();
    console.log("se manda el form");
    var colClaro = {};
    colClaro.nombre = t.$("#txtNombre").val();
    colClaro.rol = t.$("#txtRol").val();
    colClaro.celular = t.$("#txtCelular").val();
    colClaro.email = t.$("#txtEmail").val();
    colClaro.empresa = t.$("#txtEmpresa").val();
    colClaro.tipo = CONSTANTE.claro;
    Meteor.call("insertarColClaro",colClaro,function(error,result){
      console.log("resultado es : " + result);
      console.log(error);
      if (error)
        if (error.reason)
          helpSetStatusMsg(CONSTANTE.error,MENSAJES.insertarColClaro_ERROR
            + " - " + error.reason);
        else
        helpSetStatusMsg(CONSTANTE.error,MENSAJES.insertarColClaro_ERROR);
      else{
        helpSetStatusMsg(CONSTANTE.ok,MENSAJES.insertarColClaro_OK);
        Router.go(Session.get("rutaPagina").split(".").shift());
      }
    });
  }
});

Template.colClaroNew.onRendered(function(){
  // console.log($(window).width());
  // console.log($(document).width());
});
////////////////////////////////////////////////////////////////////
Template.colClaro.events({
  "keyup #txtBuscar" : function(e,t){
    var input = e.currentTarget.value;
    if (input.length >= CONSTANTE.minBuscar){
      Session.set("txtBuscar", input);
    }
    else {
      Session.set("txtBuscar", CONSTANTE.todo);
    }
  },
  //TODO crear un modulo para agregar tipo de roles, insertar con los _id iguales a 1,2,3,4,5
  // despues guardar solo el id en el campo rol de Colaboradores
  //TODO averiguar como hacer un join entre las colecciones colaboradores y tipoRol
  "change #selRolColClaro" : function(e,t){
    var input = e.currentTarget.value;
    console.log(input);///

  }
});

Template.colClaro.helpers({
  personas: function(){
    if (Session.equals("txtBuscar", CONSTANTE.todo)) {
      return helpFindColClaro();
    }
    else{
      return helpFindColClaroFiltro(Session.get("txtBuscar"));
    }
  }
});
