helpMongoData = function(doc){
  if (doc.count() == 0) {
    return null;
  }
  else {
    return doc;
  }
}

helpGetModalTemplate = function(ruta){
  switch (ruta) {
    case "colClaro.list":
    return Template.colClaroNew;
  }
}

helpOnlyNumbers = function(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 47 && charCode < 58){
    return true;
  }
  return false;
}
