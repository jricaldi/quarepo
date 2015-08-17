Meteor.startup(function () {
  //sequence for tipoRol
  var _tipoRol = Sequences.findOne({ _id:CONSTANTE.datosTipoRol });
  if(!_tipoRol){
    Sequences.insert({ _id: CONSTANTE.datosTipoRol, seq: 0 })
    console.log("se inserto un Sequences");
  }
  else{
    console.log("ya existe el contador: " + CONSTANTE.datosTipoRol);
  }
});
