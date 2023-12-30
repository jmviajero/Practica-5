import { GraphQLError } from "npm:graphql@16.8.1";
import { ModeloUsuario, ModeloUsuarioTipo, Modelocoleccion_de_comics, Modelocoleccion_de_comicsType, Modelocomics } from "../db/Schema.ts";
import { ComictipoaComic } from "../Controladores/De_Comic_tipo_a_Comic.ts";
import { comics } from "../types.ts"




export const Query = {
    mostrarusuario_por_id: async (_:unknown, args:{id: string}) : Promise<ModeloUsuarioTipo>=>{
        const usuario= await (ModeloUsuario.findById({_id: args.id}).exec())
        if(!usuario){
          throw new GraphQLError ("Pet no encontrado")
        }
        
        return usuario;
    },
    
    mostrarusuarios: async (_:unknown): Promise<ModeloUsuarioTipo[]>=>{
        const usuarios= await ModeloUsuario.find().exec()
        
        if (!usuarios) {
          throw new GraphQLError ("no encontrado")
        }

        return usuarios;
    
    },

    mostrarcomic_por_id: async (_:unknown, args:{id: string}) : Promise<comics[]>=>{
        const comics= await (Modelocomics.find({_id: args.id}).exec())
        if(!comics){
          throw new GraphQLError ("Pet no encontrado")
        }
        
        return comics.map(elem => ComictipoaComic(elem))
    },
    
    mostrarcomics: async (_:unknown): Promise<comics[]>=>{
        const comics= await Modelocomics.find().exec()
        
        if (!comics) {
          throw new GraphQLError ("no encontrado")
        }

        return comics.map(elem => ComictipoaComic(elem))
    
    },

    mostrarcoleccion_de_comics_por_id: async(_:unknown, args: {id:string}): Promise<Modelocoleccion_de_comicsType> =>{
        const coleccion_de_comics = await Modelocoleccion_de_comics.findById(args.id).exec()

        if(!coleccion_de_comics){
            throw new GraphQLError("No existe esta coleccion de comics")
        }

        return coleccion_de_comics;
    },

    mostrarcoleccion_de_comics: async(_:unknown): Promise<Modelocoleccion_de_comicsType[]> => {
        const coleccion_de_comics= await Modelocoleccion_de_comics.find().exec()

        if(!coleccion_de_comics){
            throw new GraphQLError("No existe ningun elemento en colecciones de comics")
        }

        return coleccion_de_comics;
    }
    
}
