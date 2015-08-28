Meteor.methods({
    "find_linea":function(telefono){
    var url = "http://172.19.73.55:8909/ConsultaDatosPrepagoWS/EbsDatosPrepago?WSDL"
    var servicio = Soap.createClient(url);
    var parametros = {telefono: telefono.substr(2)};
    console.log(servicio);
    console.log(parametros);
    console.log(servicio.describe());
    console.log("datos:");
    console.log(servicio.EbsDatosPrepagoService.EbsDatosPrepagoSoapPort.leerDatosPrepago(parametros));
    return result = servicio.EbsDatosPrepagoService.EbsDatosPrepagoSoapPort.leerDatosPrepago(parametros);
  }
});
