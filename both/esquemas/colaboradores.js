Esquemas.colaboradores = new SimpleSchema({
    nombre: {
        type: String,
        label: "Nombre",
        max: 200
    },
    rol: {
        type: String,
        label: "Rol",
        max : 1
    },
    celular: {
        type: String,
        label: "Celular o Telefono",
        max:15
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
        max:80
    },
    empresa: {
        type: String,
        label: "Empresa",
        max: 25
    },
    tipo:{
      type: String,
      label: "Tipo Colaborador(IBM o Claro)",
      max: 25
    }
});
