Meteor.methods({
  //////////////////////////////////////////////////////////////////
  "updateSequence":function(sequence){
    console.log("update sequence");
    Sequences.update({_id: sequence},{$inc: {seq: 1}});
  },
  "rollback_updateSequence":function(sequence){
    Sequences.update({_id: sequence},{$inc: {seq: -1}});
  },
  //////////////////////////////////////////////////////////////////
  "insertarRol":function(tipoRolEnt){
    console.log("insert tipoRolEnt");
    Roles.insert(tipoRolEnt);
  },
  "delete_DatosTipoRol" : function(id){
    var lista = Colaboradores.find({rol : id});
    if (lista.count() > 0) {
        throw new Meteor.Error("existeRolSetColaboradores", "El rol no puede eliminarse porque hay colaboradores que lo usan");
    }
    else {
      Roles.remove({_id:id});
    }
  },
  "insert_DatosTipoRol" : function(sequence,tipoRolEnt){
    //Vericamos si el nombre del rol existe
    var cadena = new RegExp(tipoRolEnt.nombre, "i");
    if (Roles.findOne({nombre:cadena})) {
      throw new Meteor.Error("existeRol", "El rol ya existe");
    }

    var res = helpFindOneSequences(sequence);
    tipoRolEnt._id = (Number(res.seq) + 1) + "";

    Meteor.call("updateSequence", sequence, function(error, result){
      if(!error){
        Meteor.call("insertarRol", tipoRolEnt, function(error, result){
          if(error){
            Meteor.call("rollback_updateSequence", sequence, function(error, result){});
          }
        });
      }
    });
  },
  "update_DatosTipoRol" : function(tipoRolEnt){
    Roles.update({_id:tipoRolEnt._id},{$set : tipoRolEnt});
  },
  //////////////////////////////////////////////////////////////////
  "insertarEmpresa":function(empresaEnt){
    console.log("insert empresaEnt");
    console.log(empresaEnt);
    Empresas.insert(empresaEnt);
  },
  "delete_DatosEmpresa" : function(id){
    var lista = Colaboradores.find({empresa : id});
    if (lista.count() > 0) {
        throw new Meteor.Error("existeEmpresaSetColaboradores", "La empresa no puede eliminarse porque hay colaboradores que lo usan");
    }
    else {
      Empresas.remove({_id:id});
    }
  },
  "insert_DatosEmpresa" : function(sequence,empresaEnt){
    //Vericamos si el nombre del rol existe
    var cadena = new RegExp(empresaEnt.nombre, "i");
    if (Empresas.findOne({nombre:cadena})) {
      throw new Meteor.Error("existeEmpresa", "La empresa ya existe");
    }

    var res = helpFindOneSequences(sequence);
    empresaEnt._id = (Number(res.seq) + 1) + "";

    Meteor.call("updateSequence", sequence, function(error, result){
      if(!error){
        Meteor.call("insertarEmpresa", empresaEnt, function(error, result){
          if(error){
            Meteor.call("rollback_updateSequence", sequence, function(error, result){});
          }
        });
      }
    });
  },
  "update_DatosEmpresa" : function(empresaEnt){
    Empresas.update({_id:empresaEnt._id},{$set : empresaEnt});
  }
});
