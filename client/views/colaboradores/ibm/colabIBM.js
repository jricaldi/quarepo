Template.colIBMNew.events({
  "keypress #txtCelular" : function(e,t){
    return helpOnlyNumbers(e);
  },
  "submit" : function(e,t){
    e.preventDefault();
    var colIBM = {};
    colIBM.nombre = t.$("#txtNombre").val();
    colIBM.rol = t.$("#selTipoRol").val();
    colIBM.celular = t.$("#txtCelular").val();
    colIBM.email = t.$("#txtEmail").val();
    colIBM.tipo = CONSTANTE.claro;
    var data = [colIBM];
    helpExecuteMethod(true,"insert_colIBM",data);
  }
});

Template.colIBMNew.helpers({
  selTipoRol: function(){
    return helpFindTipoRoles(CONSTANTE.activo);
  }
});

Template.colIBMNew.onRendered(function(){

});
////////////////////////////////////////////////////////////////////
Template.colIBM.events({
  "keyup #txtBuscar" : function(e,t){
    var input = e.currentTarget.value;
    if (input.length >= CONSTANTE.minBuscar){
      Session.set("txtBuscar", input);
    }
    else {
      Session.set("txtBuscar", undefined);
    }
  },
  "change #selTipoRol" : function(e,t){
    var input = e.currentTarget.value;
    if (input == 0){
      console.log("entro al input == 0");
      Session.set("filterTipoRol",undefined);}
      else
      Session.set("filterTipoRol",input);
    }
  });

  Template.colIBM.helpers({
    personas: function(){
      var personas = helpFindColaborador(CONSTANTE.claro,Session.get("filterTipoRol"),Session.get("txtBuscar")).fetch();
      var _list = [];
      var roles = helpFindTipoRoles(CONSTANTE.activo).fetch();
      var empresas = helpFindEmpresas(CONSTANTE.activo).fetch();
      for (var i = 0; i < personas.length; i++) {
        //match roles
        for (var j = 0; j < roles.length; j++) {
          if (personas[i].rol == roles[j]._id) {
            personas[i].rolTxt = roles[j].nombre;
            break;
          }
        }
        //match empresas
        for (var k = 0; k < roles.length; k++) {
          if (personas[i].empresa == empresas[k]._id) {
            personas[i].empresaTxt = empresas[k].nombre;
            break;
          }
        }
        _list.push(personas[i]);
      }
      return _list;
    },
    selTipoRol: function(){
      return helpFindTipoRoles(CONSTANTE.activo);
    }
  });

  Template.colIBM.onRendered(function(){

  });
