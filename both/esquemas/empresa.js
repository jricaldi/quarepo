Esquemas.roles = new SimpleSchema({
    nombre: {
        type: String,
        label: "Nombre",
        max: 50
    },
    estado: {
        type: String,
        label: "Estado",
        max:1,
        allowedValues: estadosTiposRol
    },
    domicilio: {
      type: String,
      label: "Domicilio",
      max:100,
    },
    celular: {
        type: String,
        label: "Celular o Telefono",
        max:15
    },
});
