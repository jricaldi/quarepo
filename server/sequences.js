Meteor.startup(function () {
  //sequence for tipoRol
  seqTipoRol = CONSTANTE.datosTipoRol;
  var _tipoRol = Sequences.findOne({ _id:seqTipoRol });
  if(!_tipoRol){
    Sequences.insert({ _id: seqTipoRol, seq: 0 })
    console.log("se inserto el sequence: " + seqTipoRol);
  }
  else{
    console.log("ya existe el contador: " + seqTipoRol);
  }
  //sequence for empresa
  seqEmpresa = CONSTANTE.datosEmpresa;
  var _empresa = Sequences.findOne({ _id:seqEmpresa });
  if(!_empresa){
    Sequences.insert({ _id: seqEmpresa, seq: 0 })
    console.log("se inserto el sequence: " + seqEmpresa);
  }
  else{
    console.log("ya existe el contador: " + seqEmpresa);
  }
});
