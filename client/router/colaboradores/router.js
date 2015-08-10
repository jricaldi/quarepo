Router.route('/colaboradoresClaro',{
  name:'colClaro',
  waitOn: function () {
    console.log("sub colClaro");
    // var input = 'mau'
    // var sub = Meteor.subscribe('listarColClaro');
    // if (!Session.equals("txtBuscar", undefined)) {
    //   sub.stop();
    // }
    return Meteor.subscribe('listarColClaro');
  },
  data : function(){
    var datos = helpMongoData(helpFindColClaro());
    if(datos!=null)
      return {personas: datos};
    return datos;
  }
});

Router.route('/nuevoColaboradorClaro',{
  name:'colClaro.new'
});
