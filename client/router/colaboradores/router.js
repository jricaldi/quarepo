Router.route('/colaboradoresClaro',{
  name:'colClaro',
  waitOn: function () {
    Session.set("filterTipoRol", undefined);
    Session.set("txtBuscar", undefined);
    return [Meteor.subscribe('listarColaboradores',CONSTANTE.claro),
            Meteor.subscribe('listarTiposRoles')];
  },
  data : function(){
    var datos = helpMongoData(helpFindColaborador(CONSTANTE.claro));
    if(datos==null)
      return {personas: datos};
    else
      return datos;
  }
});

Router.route('/nuevoColaboradorClaro',{
  name:'colClaro.new',
  waitOn: function () {
    return Meteor.subscribe('listarTiposRoles');
  },
  loadingTemplate : null
});
