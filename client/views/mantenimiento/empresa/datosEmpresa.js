Template.datosEmpresaNew.events({
  "submit" : function(e,t){
    e.preventDefault();
    var empresaEnt = {};
    empresaEnt.nombre = t.$("#txtNombre").val().toLowerCase();
    empresaEnt.estado = t.$("#selEstado").val();
    empresaEnt.domicilio = t.$("#txtDomicilio").val();
    empresaEnt.celular = t.$("#txtCelular").val();
    var data = [CONSTANTE.datosEmpresa,empresaEnt];
    helpExecuteMethod(true,"insert_DatosEmpresa",data)
  }
});

Template.datosEmpresaNew.helpers({

});
//////////////////////////////////////////////
Template.datosEmpresa.helpers({
  empresas: function(){
    var list = helpFindEmpresas().fetch();
    var _list = [];
    for (var i = 0; i < list.length; i++) {
      var doc = list[i];
      if(doc.estado == 1){
        doc.estadoTxt = "Activado";
        doc.estadoBol = true;
      }
      else{
        doc.estadoTxt = "Inactivo";
        doc.estadoBol = false;
      }
      _list.push(doc);
    }
    return _list;
  }
});

Template.datosEmpresa.events({
  "click .del" : function(e,t){
    console.log("del");
    var data = [this._id];
    var option = confirm("Se elminará la empresa: " + this.nombre.toUpperCase() +
    ", ¿Está seguro?");
    if (option) {
      helpExecuteMethod(false,"delete_DatosEmpresa",data);
    }
  },
  "click .mod" :function(){
    console.log("mod");
    Session.set("id",this._id);
    Router.go(Session.get("rutaPagina") + CONSTANTE.edit);
  }
});

Template.datosEmpresa.onRendered(function(){
    Session.set("opcionMant","2");
    AnimatedEach.attachHooks(this.find("#tabla"));
});
//////////////////////////////////////////////
Template.datosEmpresaEdit.onRendered(function(){
  var ent = this.data; //data que proviene del router
  this.$("#txtNombre").val(ent.nombre);
  this.$("#selEstado").val(ent.estado);
  this.$("#txtDomicilio").val(ent.domicilio);
  this.$("#txtCelular").val(ent.celular);

  this.$("#lblNombre").addClass("active");
  this.$("#lblDomicilio").addClass("active");
  this.$("#lblCelular").addClass("active");
});

Template.datosEmpresaEdit.events({
  "submit" : function(e,t){
    e.preventDefault();
    var empresaEnt = {};
    empresaEnt._id = this._id
    empresaEnt.nombre = t.$("#txtNombre").val().toLowerCase();
    empresaEnt.estado = t.$("#selEstado").val();
    empresaEnt.domicilio = t.$("#txtDomicilio").val();
    empresaEnt.celular = t.$("#txtCelular").val();
    var data = [empresaEnt];
    helpExecuteMethod(true,"update_DatosEmpresa",data)
  }
});
