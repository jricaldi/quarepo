Template.datosTipoRolNew.events({
  "submit" : function(e,t){
    e.preventDefault();
    var tipoRolEnt = {};
    tipoRolEnt.nombre = t.$("#txtNombre").val().toLowerCase();
    tipoRolEnt.estado = t.$("#selEstado").val();

    var data = [CONSTANTE.datosTipoRol,tipoRolEnt];
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
        doc.estadoTxt = "Activado";
      else
        doc.estadoTxt = "Inactivo";
      _list.push(doc);
    }
    return _list;
  }
});
Template.datosTipoRol.events({
  "click .del" : function(e,t){
    console.log("del");
    var data = [this._id];
    var option = confirm("Se elminará el tipo de rol: " + this.nombre.toUpperCase() +
    ", ¿Está seguro?");
    if (option) {
      helpExecuteMethod(false,"deleteTipoRol",data);
    }
  },
  "click .mod" :function(){
    console.log("mod");
    Session.set("id",this._id);
    Router.go(Session.get("rutaPagina") + CONSTANTE.edit);
  }
});
//////////////////////////////////////////////
Template.datosTipoRolEdit.onRendered(function(){
  var ent = this.data; //data que proviene del router
  this.$("#txtNombre").val(ent.nombre);
  this.$("#lblTxtNombre").addClass("active");
  this.$("#selEstado").val(ent.estado);
});

Template.datosTipoRolEdit.events({
  "submit" : function(e,t){
    e.preventDefault();
    var tipoRolEnt = {};
    tipoRolEnt._id = this._id
    tipoRolEnt.nombre = t.$("#txtNombre").val().toLowerCase();
    tipoRolEnt.estado = t.$("#selEstado").val();
    var data = [tipoRolEnt];
    helpExecuteMethod(true,"updateDatosTipoRol",data)
  }
});
