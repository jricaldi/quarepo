Meteor.methods({
  "updateSequence":function(sequence,nombre){
    console.log("update sequence");
    var cadena = new RegExp(nombre, "i");
    var validExistTipoRol = Roles.findOne({nombre:cadena});
    if (validExistTipoRol) {
      throw new Meteor.Error("existeRol", "El rol ya existe");
    }
    Sequences.update({_id: sequence},{$inc: {seq: 1}});
  },
  "rollback_updateSequence":function(sequence){
    Sequences.update({_id: sequence},{$inc: {seq: -1}});
  },
  "insertarDatosTipoRol":function(tipoRolEnt){
    console.log("insert tipoRolEnt");
    Roles.insert(tipoRolEnt);
  },
  "deleteTipoRol" : function(id){
    var lista = Colaboradores.find({rol : id});
    if (lista) {
        throw new Meteor.Error("existeRolSetColaboradores", "El rol no puede eliminarse porque hay colaboradores que lo usan");
    }
    else {
      Roles.remove({_id:id});
    }
  }
});
