import { Modelocoleccion_de_comicsType, Modelocomics, ModelocomicsType } from "../db/Schema.ts";
import { coleccion_de_comics, comics } from "../types.ts";
import { ComictipoaComic } from "./De_Comic_tipo_a_Comic.ts";



export const decolecciondecomicstipo= async (coleccioncomictipo: Modelocoleccion_de_comicsType): Promise<coleccion_de_comics> => {

    const modelotipocomic: ModelocomicsType[] = await  Modelocomics.find({_id: {$in: coleccioncomictipo.comics}})
    const comicsencoleccion : comics[] = modelotipocomic.map(elem=> ComictipoaComic(elem))

    return {
        id: coleccioncomictipo.id.toString(),
        name: coleccioncomictipo.name,
        comics: comicsencoleccion
    }

}