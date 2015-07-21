var Schemas = {};

Schemas.colaboradores = new SimpleSchema({
    nombre: {
        type: String,
        label: "Nombre",
        max: 200
    },
    rol: {
        type: String,
        label: "Rol"
    },
    celular: {
        type: Number,
        label: "Celular",
        min: 7,
        max:10
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
    }
});
