Template.datosTipoRolNew.events({
  "submit" : function(e,t){
    e.preventDefault();
    var tipoRol = {};
    tipoRol._id = (Number(t.$("#data_sequence").val()) + 1) + "";
    tipoRol.nombre = t.$("#txtNombre").val().toLowerCase();
    tipoRol.estado = t.$("#selEstado").val();
    
    //FIXME crear un metodo donde este toda esta logica
    Meteor.call("updateSequence",CONSTANTE.datosTipoRol,tipoRol.nombre,function(error,result){
      if (error){
        helpSetStatusMsg(CONSTANTE.error,MENSAJES.insertarDato
        + " - " + error.reason);
      }
      else{
        Meteor.call("insertarDatosTipoRol",tipoRol,function(error,result){
          if (error){
            helpSetStatusMsg(CONSTANTE.error,MENSAJES.insertarDatosTipoRol_ERROR
            + " - " + error.reason);
            Meteor.call("rollback_updateSequence",CONSTANTE.datosTipoRol, function(error, result){
              if(error){
                helpSetStatusMsg(CONSTANTE.error,MENSAJES.insertarDatosTipoRol_ERROR
                + " - " + error.reason);
              }
            });
          }
          else{
            helpSetStatusMsg(CONSTANTE.ok,MENSAJES.insertarDatosTipoRol_OK);
            Router.go(Session.get("rutaPagina").split(".").shift());
          }
        });
      }
    });
    //FIN FIXME
  }
});

Template.datosTipoRolNew.helpers({
  data_sequence: function(){
    var res = helpFindOneSequences(CONSTANTE.datosTipoRol);
    return res.seq;
  }
});
//////////////////////////////////////////////
Template.datosTipoRol.helpers({
  roles: function(){
    var list = helpFindTipoRoles().fetch();
    var _list = [];
    for (var i = 0; i < list.length; i++) {
      var doc = list[i];
      if(doc.estado == 1)
        doc.estado = "Activado";
      else
        doc.estado = "Inactivo";
      _list.push(doc);
    }
    return _list;
  }
});
Template.datosTipoRol.events({
  "click .del" : function(e,t){
    console.log("del");
    var id = this._id;
    //FIXME crear una function que haga todo esto
    Meteor.call("deleteTipoRol", id, function(error, result){
      if(error){
        helpSetStatusMsg(CONSTANTE.error,MENSAJES.deleteTipoRol_ERROR
        + " - " + error.reason);
      }
      else {
          helpSetStatusMsg(CONSTANTE.ok,MENSAJES.deleteTipoRol_OK);
      }
    });
    //FIN FIXME
  },
  "click .mod" :function(){
    console.log("mod");
  }
});
