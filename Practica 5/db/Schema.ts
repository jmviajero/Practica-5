import mongoose from "mongoose";
import { usuario, coleccion_de_comics, comics } from "../types.ts";


const Schema= mongoose.Schema;

const SchemaUsuario= new Schema({
    name: {type: String, required:true},
    correo_electronico: {type: String, required:true},
    coleccion_de_comics: {type: [Schema.Types.ObjectId] , required:true, ref:"coleccion_de_comics"}
})

export type ModeloUsuarioTipo= mongoose.Document &  Omit<usuario, "id"| "coleccion_de_comics"> & { coleccion_de_comics: [mongoose.Types.ObjectId] };

export const ModeloUsuario= mongoose.model<ModeloUsuarioTipo>("usuario", SchemaUsuario); 

const Schemacoleccion_de_comics= new Schema({
    name: {type: String, required:true},
    comics: {type: [mongoose.Types.ObjectId], required:true, ref: "comics"}
})

export type Modelocoleccion_de_comicsType= mongoose.Document & Omit<coleccion_de_comics, "id" | "comics">  &  {comics : [mongoose.Types.ObjectId] };

export const Modelocoleccion_de_comics= mongoose.model<Modelocoleccion_de_comicsType>("coleccion_de_comics", Schemacoleccion_de_comics)

const Schemacomics= new Schema({
    titulo: {type: String, required:true},
    descripcion: {type: String, required:true},
    formato: {type: String, required:true}
})

export type ModelocomicsType= mongoose.Document & Omit<comics, "id">

export const Modelocomics= mongoose.model<ModelocomicsType>("comics", Schemacomics)