
export const typeDefs=`#graphql

    type usuario{
        id: ID!
        name: String!
        correo_electronico: String!
        coleccion_de_comics: coleccion_de_comics!
    }

    type coleccion_de_comics{
        id: ID!
        name: String!
        comics: [comics!]!
    }

    type comics{
        id: ID!
        titulo: String!
        descripcion: String!
        formato: String!
    }

    type Query{
        mostrarusuario_por_id(id:ID!): usuario!
        mostrarusuarios: [usuario!]!

        mostrarcoleccion_de_comics_por_id(id: ID!): coleccion_de_comics!
        mostrarcoleccion_de_comics: [coleccion_de_comics!]!
        
        mostrarcomic_por_id(id:ID!): [comics!]
        mostrarcomics: [comics!]!
    }

    type Mutation{
        crearusuario(name: String!,  correo_electronico: String!, coleccion_de_comics: ID!): usuario!
        modificarusuario(id: ID!, name: String!,  correo_electronico: String!, coleccion_de_comics: ID!): usuario!
        eliminarusuario(id:ID!): usuario!

        crearcoleccion_de_comic(name: String!, comics: [ID!]!): coleccion_de_comics!
        modidicarcoleccion_de_comics(id: ID!, name: String!, comics: [ID!]!): coleccion_de_comics!
        eliminarcolecciondecomics(id:ID!): coleccion_de_comics!

        crearcomic(titulo: String!, descripcion: String!, formato: String!): comics!
        modificarcomic(id:ID!, titulo: String!, descripcion: String!, formato: String!): comics!
        eliminarcomic(id:ID!): comics!        
    }

`