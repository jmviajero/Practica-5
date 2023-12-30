import { ModelocomicsType } from "../db/Schema.ts";
import { comics } from "../types.ts";


export const ComictipoaComic= (comictipo: ModelocomicsType): comics=>{
    
    return {
        id : comictipo.id.toString(),
        titulo: comictipo.titulo,
        descripcion: comictipo.descripcion,
        formato: comictipo.formato
    }
}