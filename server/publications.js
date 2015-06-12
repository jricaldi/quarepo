Meteor.publish("listarColClaro", function () {
  return ColaboradoresClaro.find();
});
