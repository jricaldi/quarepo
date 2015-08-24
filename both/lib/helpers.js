helpFindColaborador = function(tipo,filterTipoRol,txtBuscar){
  if (!filterTipoRol && !txtBuscar) {
    return Colaboradores.find({tipo: tipo});
  }
  else{
    if (!filterTipoRol && txtBuscar) {
      var cadena = new RegExp(".*" + txtBuscar + ".*", "i");
      return Colaboradores.find({$and : [
        {$or:
          [
            {nombre : cadena},
            {celular: cadena},
            {email :  cadena}
          ]
        },
        {tipo : tipo}
      ]});
    }
    if (filterTipoRol && !txtBuscar) {
      return Colaboradores.find({tipo: tipo, rol: filterTipoRol});
    }
    if (filterTipoRol && txtBuscar) {
      var cadena = new RegExp(".*" + txtBuscar + ".*", "i");
      return Colaboradores.find({$and : [
        {$or:
          [
            {nombre : cadena},
            {celular: cadena},
            {email :  cadena}
          ]
        },
        {tipo : tipo},
        {rol : filterTipoRol}
      ]});
    }
  }
};

helpFindSequences = function(){
  return Sequences.find();
};

helpFindOneSequences = function(sequence){
  return Sequences.findOne({_id: sequence});
};

helpFindTipoRoles = function(estado){
  if(estado)
    return Roles.find({estado : estado});
  return Roles.find();
};

helpFindOneTipoRoles = function(id){
  return Roles.findOne({_id : id});
};
