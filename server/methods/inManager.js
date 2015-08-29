Meteor.methods({
    "find_linea":function(telef){
      console.log("-------------------------------------------------");
    var url1 = "http://172.19.73.55:8909/ConsultaDatosPrepagoWS/EbsDatosPrepago?WSDL"
    var servicio = Soap.createClient(url1);
    // var parametros = {"INDatosPrepagoRequest": {"telefono": "988202031"}}
    // var parametros ={"telefono":"988202031"};
    var parametros ="<![CDATA[<s1:telefono>988202031<s1/telefono>]]>"
    // // console.log(parametros);
    console.log(servicio.describe());
    console.log("----RESULTADO A----");
    try {
    console.log(servicio.leerDatosPrepago(parametros));
    } catch (e) {
      console.log(e);
    } finally {

    }
    // // console.log("datos:");
    // // console.log(servicio.leerDatosPrepago(parametros));
    // console.log(servicio.EbsDatosPrepagoService.EbsDatosPrepagoSoapPort.leerDatosPrepago(parametros));
    // // return result = servicio.EbsDatosPrepagoService.EbsDatosPrepagoSoapPort.leerDatosPrepago(parametros);
    // var resultado;
    // var servicio = Soap.createClient(url,function(error,cliente){
    //   console.log(error);
    //   cliente.leerDatosPrepago(parametros,function(error,result){
    //     console.log(error);
    //     console.log(result);
    //     resultado = result;
    //   })
    // });
    // return resultado;
    console.log("-------------------------------------------------");
    var url = "http://www.restfulwebservices.net/wcf/StockQuoteService.svc?wsdl";
    var args = {"request":"GOOG"};
    var soapClient = Soap.createClient(url);
    // console.log(soapClient.describe().StockQuoteService.BasicHttpBinding_IStockQuoteService.GetStockQuote);
    console.log(soapClient.describe());
    console.log("----RESULTADO B----");
    console.log(soapClient.GetStockQuote(args));
    // var result = soapClient.StockQuoteService.BasicHttpBinding_IStockQuoteService.GetStockQuote(args);

    // console.log(result);
  }
});
