Meteor.methods({
  "insertarColClaro":function(colClaroEnt){
    try {
      console.log("trata de insertar");
      Colaboradores.insert(colClaroEnt);
    } catch (e) {
      console.log("error al insertar");
      console.log(e);
      // throw new Meteor.error("insercion","No se puedo insertar un colaborador Claro");
      return CONSTANTE.error
    }
    console.log("ok de insertar");
    return CONSTANTE.ok
  }
});
