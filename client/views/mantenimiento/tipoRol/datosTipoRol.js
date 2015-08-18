Template.datosTipoRolNew.events({
  "submit" : function(e,t){
    e.preventDefault();
    var tipoRol = {};
    // tipoRol._id = (Number(t.$("#data_sequence").val()) + 1) + "";
    tipoRol.nombre = t.$("#txtNombre").val().toLowerCase();
    tipoRol.estado = t.$("#selEstado").val();

    var data = [CONSTANTE.datosTipoRol,tipoRol];
    helpExecuteMethod(true,"insertarDatosTipoRol",data)
  }
});

Template.datosTipoRolNew.helpers({
  // data_sequence: function(){
  //   var res = helpFindOneSequences(CONSTANTE.datosTipoRol);
  //   return res.seq;
  // }
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
    var data = [this._id];
    helpExecuteMethod(false,"deleteTipoRol",data);
    // if (Session.equals("status", CONSTANTE.ok));
    //   t.$(this).hide("1000",function(){console.log("se escondio");
    //   });
  },
  "click .mod" :function(){
    console.log("mod");

  }
});
