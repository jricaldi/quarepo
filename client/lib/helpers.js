helpSoloNumeros = function() {
  //codigo para validar que solo se ingresen numeros
}

helpMongoData = function(doc){
  if (doc.count() == 0) {
    return null;
  }
  else {
    return doc;
  }
}
