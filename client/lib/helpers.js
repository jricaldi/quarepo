helpMongoData = function(doc){
  if (doc.count() == 0) {
    return null;
  }
  else {
    return doc;
  }
};

helpOnlyNumbers = function(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 47 && charCode < 58){
    return true;
  }
  return false;
};

helpSetStatusMsg = function(status,mensaje){
  Session.set("status", status);
  Session.set("mensaje",mensaje);
};


helpSetViewMantDatos = function(input){
  var rutaPagina = "";
  switch (input) {
    case 1:
    rutaPagina = CONSTANTE.datosTipoRol;
    Session.set("mant_datos_tipoRol", rutaPagina);
    break;
    case 2:
    rutaPagina = CONSTANTE.datosServidores;
    Session.set("mant_datos_tipoRol", rutaPagina);
    break;
  }
  Session.set("rutaPagina", rutaPagina);
};

helpExecuteMethod = function(retornar,method,data,mensajeOK,mensajeError){
  if(mensajeOK == undefined && mensajeError == undefined){
    var mensajeOk = method + "_OK";
    var mensajeError = method + "_ERROR";
  }
  Meteor.apply(method, data, function(error, result){
    if(error){
      helpSetStatusMsg(CONSTANTE.error,MENSAJES[mensajeError]
        + " - " + error.reason);
      }
      else {
        helpSetStatusMsg(CONSTANTE.ok,MENSAJES[mensajeOk]);
        if (retornar)
          Router.go(Session.get("rutaPagina").split(".").shift());
      }
    });
  };
