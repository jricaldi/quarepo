Router.route('/colaboradoresClaro',{
  name:'colClaro',
  waitOn: function () {
    return Meteor.subscribe('listarColClaro');
  },
  data : function(){
    return helpMongoData(Colaboradores.find({tipo:"claro"}));
  }
});

Router.route('/nuevoColaboradorClaro',{
  name:'colClaro.new'
});
