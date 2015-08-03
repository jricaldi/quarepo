Meteor.methods({
  "insertarColClaro":function(colClaroEnt){
    try {
      Colaboradores.insert(colClaroEnt);
    } catch (e) {
      // throw new Meteor.error("insercion","No se puedo insertar un colaborador Claro");
      return CONSTANTE.error
    }
    return CONSTANTE.ok
  }
});
