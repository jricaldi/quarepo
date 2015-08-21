Router.route('/colaboradoresClaro',{
  name:'colClaro',
  waitOn: function () {
    return [Meteor.subscribe('listarColClaro'),
    Meteor.subscribe('listarTiposRoles')];
  },
  data : function(){
    var datos = helpMongoData(helpFindColClaro());
    if(datos!=null)
      return {personas: datos};
    return datos;
  }
});

Router.route('/nuevoColaboradorClaro',{
  name:'colClaro.new',
  waitOn: function () {
    return Meteor.subscribe('listarTiposRoles');
  }
});
