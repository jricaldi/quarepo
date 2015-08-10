Meteor.publish("listarColClaro", function () {
  // var self = this;
  // Meteor.setTimeout(function(){
  //    self.ready();
  // }, 2000);
  return helpFindColClaro();
});

Meteor.publish("listarColIbm", function () {
  return Colaboradores.find({tipo : "ibm"});
});

// Meteor.publish("listarColClaroFiltro", function(input){
//   // var cadena = new RegExp(".*"+input+".*", "i");
//   // console.log("por filtro: " + cadena.toString());
//   // var datos = Colaboradores.find({$and : [
//   //   {$or:
//   //     [
//   //       {nombre : cadena},
//   //       {celular: cadena},
//   //       {email :  cadena}
//   //     ]
//   //   },
//   //   {tipo : "claro"}
//   // ]});
//   // console.log("count datos: " + datos.count());
//   // return datos
//   return helpFindColClaroFiltro(input);
// });
