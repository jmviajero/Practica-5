import { GraphQLError } from "npm:graphql@16.8.1";
import { ModeloUsuarioTipo, Modelocoleccion_de_comics, Modelocoleccion_de_comicsType } from "../db/Schema.ts";


export const usuario={
    coleccion_de_comics : async (parent:ModeloUsuarioTipo): Promise<Modelocoleccion_de_comicsType> => {
        const coleccion_de_comics= await Modelocoleccion_de_comics.findById({_id: parent.coleccion_de_comics});

        if(!coleccion_de_comics){
           throw new GraphQLError("No encontrado");
        }

        return coleccion_de_comics;
    }
}
