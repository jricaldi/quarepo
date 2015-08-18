Meteor.methods({
  "updateSequence":function(sequence){
    console.log("update sequence");
    Sequences.update({_id: sequence},{$inc: {seq: 1}});
  },
  "rollback_updateSequence":function(sequence){
    Sequences.update({_id: sequence},{$inc: {seq: -1}});
  },
  "insertarRol":function(tipoRolEnt){
    console.log("insert tipoRolEnt");
    Roles.insert(tipoRolEnt);
  },
  "deleteTipoRol" : function(id){
    var lista = Colaboradores.find({rol : id});
    if (lista.count() > 0) {
        throw new Meteor.Error("existeRolSetColaboradores", "El rol no puede eliminarse porque hay colaboradores que lo usan");
    }
    else {
      Roles.remove({_id:id});
    }
  },
  "insertarDatosTipoRol" : function(sequence,tipoRolEnt){
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
  }
});
