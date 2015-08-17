helpFindColClaro = function(){
  return Colaboradores.find({tipo : "claro"});
};

helpFindColClaroFiltro = function(input){
  var cadena = new RegExp(".*" + input + ".*", "i");
  return Colaboradores.find({$and : [
    {$or:
      [
        {nombre : cadena},
        {celular: cadena},
        {email :  cadena}
      ]
    },
    {tipo : "claro"}
  ]});
};

helpFindColClaroRol = function(input){
  return Colaboradores.find({rol : input});
};

helpFindSequences = function(){
  return Sequences.find();
}

helpFindOneSequences = function(sequence){
  return Sequences.findOne({_id: sequence});
}

helpFindTipoRoles = function(sequence){
  return Roles.find();
}
