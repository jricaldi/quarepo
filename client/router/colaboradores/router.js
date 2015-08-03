Router.route('/colaboradoresClaro',{
  name:'colClaro',
  waitOn: function () {
    return Meteor.subscribe('listarColClaro');
  },
  data : function(){
    var datos = helpMongoData(Colaboradores.find({tipo:"claro"}));
    if(datos!=null)
      return {personas: datos};
    return datos;
  }
});

Router.route('/nuevoColaboradorClaro',{
  name:'colClaro.new'
});
