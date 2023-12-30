import { GraphQLError } from "npm:graphql@16.8.1";
import {Modelocoleccion_de_comicsType, Modelocomics } from "../db/Schema.ts";
import { comics } from "../types.ts";
import { ComictipoaComic } from "../Controladores/De_Comic_tipo_a_Comic.ts";

export const coleccion_de_comics={
    comics: async (parent:Modelocoleccion_de_comicsType): Promise<comics[]> => {
        const Ids= parent.comics.map((comic)=> comic._id)
        const comics= await Modelocomics.find({_id: {$in: Ids}})
        if(!comics){
           throw new GraphQLError("No encontrado");
        }

        return comics.map(elem => ComictipoaComic(elem))
    }
}
