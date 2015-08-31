Meteor.methods({
  "insert_ColClaro":function(colClaroEnt){
      Colaboradores.insert(colClaroEnt);
  },
  "delete_ColClaro" : function(id){
      Colaboradores.remove({_id:id});
  },
  "update_ColClaro" : function(colClaroEnt){
    Colaboradores.update({_id:colClaroEnt._id},{$set : colClaroEnt});
  }
});

Meteor.methods({
  "insert_ColIBM":function(colIBMEnt){
      Colaboradores.insert(colIBMEnt);
  },
  "delete_ColIBM" : function(id){
      Colaboradores.remove({_id:id});
  },
  "update_ColIBM" : function(colIBMEnt){
    Colaboradores.update({_id:colIBMEnt._id},{$set : colIBMEnt});
  }
});
