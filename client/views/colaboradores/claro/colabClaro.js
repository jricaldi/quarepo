Template.colClaroNew.events({
  "keypress #txtCelular" : function(e,t){
    return helpOnlyNumbers(e);
  },
  "submit" : function(e,t){
    e.preventDefault();
    var colClaro = {};
    colClaro.nombre = t.$("#txtNombre").val();
    colClaro.rol = t.$("#selRolColClaro").val();
    colClaro.celular = t.$("#txtCelular").val();
    colClaro.email = t.$("#txtEmail").val();
    colClaro.empresa = t.$("#txtEmpresa").val();
    colClaro.tipo = CONSTANTE.claro;
    var data = [colClaro];
    helpExecuteMethod(true,"insert_ColClaro",data);
  }
});

Template.colClaroNew_xsmall.helpers({
  selTiposRol: function(){
    return helpFindTipoRoles(CONSTANTE.activo);
  }
});

Template.colClaroNew_large.helpers({
  selTiposRol: function(){
    return helpFindTipoRoles(CONSTANTE.activo);
  }
});

////////////////////////////////////////////////////////////////////
Template.colClaro.events({
  "keyup #txtBuscar" : function(e,t){
    var input = e.currentTarget.value;
    if (input.length >= CONSTANTE.minBuscar){
      Session.set("txtBuscar", input);
    }
    else {
      Session.set("txtBuscar", undefined);
    }
  },
  "change #selRolColClaro" : function(e,t){
    var input = e.currentTarget.value;
    if (input == 0){
      console.log("entro al input == 0");
      Session.set("filterTipoRol",undefined);}
      else
      Session.set("filterTipoRol",input);
    }
  });

Template.colClaro.helpers({
    personas: function(){
      var personas = helpFindColaborador(CONSTANTE.claro,Session.get("filterTipoRol"),Session.get("txtBuscar")).fetch();
      var _list = [];
      var roles = helpFindTipoRoles(CONSTANTE.activo).fetch();
      for (var i = 0; i < personas.length; i++) {
        for (var j = 0; j < roles.length; j++) {
          if (personas[i].rol == roles[j]._id) {
            personas[i].rolTxt = roles[j].nombre;
            _list.push(personas[i]);
            break;
          }
        }
      }
      return _list;
    },
    selTiposRol: function(){
      return helpFindTipoRoles(CONSTANTE.activo);
    }
  });

  Template.colClaro.onRendered(function(){
    // if (Session.get("filterTipoRol")) {
    //   console.log("render");
    //   this.$("#selRolColClaro").val(Session.get("filterTipoRol"));
    // }
    // if (Session.get("txtBuscar")) {
    //   this.$("#txtBuscar").val(Session.get("txtBuscar"));
    // }
  });
