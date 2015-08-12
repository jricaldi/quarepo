helpMongoData = function(doc){
  if (doc.count() == 0) {
    return null;
  }
  else {
    return doc;
  }
};

// helpGetModalTemplate = function(ruta){
//   switch (ruta) {
//     case "colClaro":
//     return Template.colClaroNew;
//   }
// }

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
  switch (input) {
    case 1:
      Session.set("mant_datos_tipoRol", CONSTANTE.datosTipoRol);
      break;
    case 2:
      Session.set("mant_datos_tipoRol", CONSTANTE.noTemplate);
      break;
  }
}
