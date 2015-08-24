Router.route('/datos',{
  name:'datos',
  waitOn: function () {
    return [
      Meteor.subscribe('listarTiposRoles') //pronto mas subscribes
    ];
  }
});
/////////////////////////////////////////////////////
Router.route('/datos/mantenimientoNuevoTipoRol',{
  name:'datosTipoRol.new',
  waitOn: function () {
    return Meteor.subscribe('listarSequences');
  }
});

Router.route('/datos/mantenimientoEditarTipoRol',{
  name:'datosTipoRol.edit',
  waitOn: function () {
    return Meteor.subscribe('listarTiposRoles');
  },
  notFoundTemplate: 'sinDatosNoButton',
  data : function () {
    var datos = helpFindOneTipoRoles(Session.get("id"));
    if(datos!=null)
      return datos;
  }
});
/////////////////////////////////////////////////////
Router.route('/datos/mantenimientoNuevoServidores',{
  name:'datosServidores.new',
  waitOn: function () {
    return Meteor.subscribe('listarSequences');
  }
});

Router.route('/datos/mantenimientoEditarServidores',{
  name:'datosServidores.edit',
  waitOn: function () {
    return Meteor.subscribe('listarServidores');
  }
});
/////////////////////////////////////////////////////
Router.route('/datos/mantenimientoNuevoEmpresa',{
  name:'datosEmpresas.new',
  waitOn: function () {
    return Meteor.subscribe('listarSequences');
  }
});

Router.route('/datos/mantenimientoEditarEmpresa',{
  name:'datosEmpresas.edit',
  waitOn: function () {
    return Meteor.subscribe('listarEmpresas');
  },
  notFoundTemplate: 'sinDatosNoButton',
  data : function () {
    var datos = helpFindOneEmpresas(Session.get("id"));
    if(datos!=null)
      return datos;
  }
});
/////////////////////////////////////////////////////
Router.route("datosTipoRol",{
  name:'datosTipoRol',
  action: function(){
    this.redirect('/datos');
  }
});
